import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { STORAGE_KEYS } from '../constants/app';
import { getStorageItem, setStorageItem } from '../utils/browserStorage';

/**
 * Contexte de thème (clair / sombre).
 * Le mode est persisté dans le localStorage et appliqué sur <html> via la classe `light`.
 */

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Hook d'accès au thème courant. */
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé à l'intérieur de <ThemeProvider>");
  return ctx;
};

/** Provider racine du thème (à placer haut dans l'arbre React). */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (getStorageItem(STORAGE_KEYS.theme) as Theme | null) ?? 'dark',
  );

  // Synchronise la classe `light` sur <html> et persiste la préférence utilisateur
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    setStorageItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({ theme, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
