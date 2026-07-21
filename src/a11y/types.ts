/** Modes de vision des couleurs (simulation + compensation). */
export type ColorVisionMode =
  | 'none'
  | 'deuteranopia'
  | 'protanopia'
  | 'tritanopia'
  | 'achromatopsia';

/** Thèmes d’affichage alternatifs. */
export type ContrastTheme = 'default' | 'light' | 'high-contrast' | 'soft';

/** Profil typographique. */
export type FontProfile = 'default' | 'dyslexia';

/** Échelle de texte (pourcentage de la taille de base). */
export type TextScale = 100 | 110 | 125 | 150 | 175;

export interface AccessibilitySettings {
  colorVision: ColorVisionMode;
  contrastTheme: ContrastTheme;
  fontProfile: FontProfile;
  textScale: TextScale;
  increasedSpacing: boolean;
  readingMode: boolean;
  reduceMotion: boolean;
  enhancedFocus: boolean;
  ttsRate: number;
  ttsPitch: number;
  /** URI de la voix système (SpeechSynthesisVoice.voiceURI). */
  ttsVoiceURI: string;
}

export const DEFAULT_A11Y_SETTINGS: AccessibilitySettings = {
  colorVision: 'none',
  contrastTheme: 'default',
  fontProfile: 'default',
  textScale: 100,
  increasedSpacing: false,
  readingMode: false,
  reduceMotion: false,
  enhancedFocus: true,
  ttsRate: 1,
  ttsPitch: 1,
  ttsVoiceURI: '',
};
