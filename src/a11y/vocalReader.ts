/** Liseuse vocale — synthèse vocale navigateur (Web Speech API) avec file d’attente. */

export type VocalReaderStatus = 'idle' | 'playing' | 'paused';

export interface VocalReaderProgress {
  currentChunk: number;
  totalChunks: number;
}

export interface VocalReaderSpeakOptions {
  lang: string;
  rate?: number;
  pitch?: number;
  voiceURI?: string;
  onStatus?: (status: VocalReaderStatus) => void;
  onProgress?: (progress: VocalReaderProgress) => void;
}

export interface VocalReaderVoiceChoice {
  id: 'female' | 'male';
  voiceURI: string;
}

const MAX_CHUNK_LENGTH = 280;
const FEMALE_HINTS = [
  'female',
  'woman',
  'girl',
  'samantha',
  'victoria',
  'karen',
  'moira',
  'amelie',
  'aurélie',
  'ana',
  'maria',
  'femme',
  'mujer',
  'mulher',
] as const;
const MALE_HINTS = [
  'male',
  'man',
  'boy',
  'daniel',
  'alex',
  'thomas',
  'jorge',
  'diego',
  'nicolas',
  'paul',
  'homme',
  'hombre',
  'homem',
] as const;

function splitIntoChunks(text: string): string[] {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) return [];

  const sentences = normalized.split(/(?<=[.!?…])\s+|\n+/u).filter(Boolean);
  const chunks: string[] = [];

  for (const sentence of sentences) {
    if (sentence.length <= MAX_CHUNK_LENGTH) {
      chunks.push(sentence);
      continue;
    }
    let rest = sentence;
    while (rest.length > MAX_CHUNK_LENGTH) {
      const slice = rest.slice(0, MAX_CHUNK_LENGTH);
      const breakAt = slice.lastIndexOf(' ');
      const cut = breakAt > 40 ? breakAt : MAX_CHUNK_LENGTH;
      chunks.push(rest.slice(0, cut).trim());
      rest = rest.slice(cut).trim();
    }
    if (rest) chunks.push(rest);
  }

  return chunks;
}

function pickVoice(lang: string, voiceURI?: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  if (voiceURI) {
    const exact = voices.find((v) => v.voiceURI === voiceURI);
    if (exact) return exact;
  }
  const prefix = lang.split('-')[0].toLowerCase();
  return (
    voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase()) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix)) ??
    voices.find((v) => v.default) ??
    voices[0]
  );
}

function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const existing = window.speechSynthesis.getVoices();
    if (existing.length) {
      resolve(existing);
      return;
    }
    const onVoices = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener('voiceschanged', onVoices);
    window.setTimeout(() => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
      resolve(window.speechSynthesis.getVoices());
    }, 500);
  });
}

let chunkIndex = 0;
let chunks: string[] = [];
let status: VocalReaderStatus = 'idle';
let statusListener: ((s: VocalReaderStatus) => void) | null = null;
let progressListener: ((p: VocalReaderProgress) => void) | null = null;
let activeOptions: VocalReaderSpeakOptions | null = null;

function setStatus(next: VocalReaderStatus) {
  status = next;
  statusListener?.(next);
}

function setProgress() {
  progressListener?.({
    currentChunk: chunks.length ? chunkIndex + 1 : 0,
    totalChunks: chunks.length,
  });
}

function speakNextChunk() {
  if (status !== 'playing' || !activeOptions) return;
  if (chunkIndex >= chunks.length) {
    setStatus('idle');
    chunks = [];
    chunkIndex = 0;
    activeOptions = null;
    return;
  }

  const text = chunks[chunkIndex];
  const utterance = new SpeechSynthesisUtterance(text);
  const { lang, rate = 1, pitch = 1, voiceURI } = activeOptions;

  utterance.lang = lang;
  utterance.rate = Math.min(2, Math.max(0.5, rate));
  utterance.pitch = Math.min(2, Math.max(0.5, pitch));
  utterance.volume = 1;

  const voice = pickVoice(lang, voiceURI);
  if (voice) utterance.voice = voice;

  utterance.onend = () => {
    if (status !== 'playing') return;
    chunkIndex += 1;
    setProgress();
    speakNextChunk();
  };

  utterance.onerror = () => {
    if (status === 'playing') {
      chunkIndex += 1;
      speakNextChunk();
    }
  };

  window.speechSynthesis.speak(utterance);
  setProgress();
}

/** Démarre la lecture vocale d’un texte. */
export async function startVocalReading(
  text: string,
  options: VocalReaderSpeakOptions,
): Promise<boolean> {
  if (typeof window === 'undefined' || !window.speechSynthesis) return false;

  const trimmed = text.trim();
  if (!trimmed) return false;

  stopVocalReading();

  statusListener = options.onStatus ?? null;
  progressListener = options.onProgress ?? null;
  activeOptions = options;

  await waitForVoices();

  chunks = splitIntoChunks(trimmed);
  chunkIndex = 0;

  if (!chunks.length) return false;

  setStatus('playing');
  speakNextChunk();
  return true;
}

export function pauseVocalReading(): void {
  if (status !== 'playing' || !window.speechSynthesis) return;
  window.speechSynthesis.pause();
  setStatus('paused');
}

export function resumeVocalReading(): void {
  if (status !== 'paused' || !window.speechSynthesis) return;
  window.speechSynthesis.resume();
  setStatus('playing');
}

export function stopVocalReading(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  chunks = [];
  chunkIndex = 0;
  activeOptions = null;
  setStatus('idle');
  setProgress();
}

export function getVocalReaderStatus(): VocalReaderStatus {
  return status;
}

export function listVoicesForLang(lang: string): SpeechSynthesisVoice[] {
  const prefix = lang.split('-')[0].toLowerCase();
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith(prefix))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function scoreVoiceForLang(voice: SpeechSynthesisVoice, lang: string): number {
  const lowLang = voice.lang.toLowerCase();
  const target = lang.toLowerCase();
  const prefix = target.split('-')[0];
  let score = 0;
  if (lowLang === target) score += 4;
  else if (lowLang.startsWith(prefix)) score += 2;
  if (voice.default) score += 1;
  return score;
}

function findVoiceByHints(
  voices: SpeechSynthesisVoice[],
  hints: readonly string[],
): SpeechSynthesisVoice | null {
  const match = voices.find((v) => {
    const name = v.name.toLowerCase();
    return hints.some((h) => name.includes(h));
  });
  return match ?? null;
}

/**
 * Retourne seulement 2 voix max par langue : féminine + masculine.
 * Si une catégorie est introuvable sur l'appareil, fallback intelligent.
 */
export function listPreferredVoiceChoicesForLang(lang: string): VocalReaderVoiceChoice[] {
  const voices = listVoicesForLang(lang);
  if (!voices.length) return [];

  const ranked = [...voices].sort(
    (a, b) =>
      scoreVoiceForLang(b, lang) - scoreVoiceForLang(a, lang) || a.name.localeCompare(b.name),
  );

  const female = findVoiceByHints(ranked, FEMALE_HINTS) ?? ranked[0];
  const male =
    findVoiceByHints(
      ranked.filter((v) => v.voiceURI !== female.voiceURI),
      MALE_HINTS,
    ) ??
    ranked.find((v) => v.voiceURI !== female.voiceURI) ??
    female;

  const choices: VocalReaderVoiceChoice[] = [{ id: 'female', voiceURI: female.voiceURI }];
  if (male.voiceURI !== female.voiceURI) choices.push({ id: 'male', voiceURI: male.voiceURI });
  return choices;
}

export { splitIntoChunks };
