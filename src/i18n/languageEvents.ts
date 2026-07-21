let languageVersion = 0;
const listeners = new Set<() => void>();

export function subscribeLanguage(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getLanguageVersion() {
  return languageVersion;
}

export function bumpLanguageVersion() {
  languageVersion += 1;
  for (const listener of listeners) listener();
}
