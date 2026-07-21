import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { buildLocalizedPath, detectPathLanguage, isSupportedLanguage } from './urlLanguage';

export function useLocalizedPath() {
  const location = useLocation();
  const activeLang = detectPathLanguage(location.pathname);

  return useCallback(
    (path: string) => {
      if (!path.startsWith('/')) return path;
      if (activeLang && isSupportedLanguage(activeLang)) {
        return buildLocalizedPath(path, activeLang);
      }
      return path;
    },
    [activeLang],
  );
}
