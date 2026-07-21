import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  buildLocalizedPath,
  detectPathLanguage,
  stripLanguagePrefix,
} from '../../i18n/urlLanguage';

/** Remonte la fenêtre en haut (comportement instantané, indépendant de scroll-behavior). */
export function scrollAppToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Remonte en haut de la page à chaque changement de route, ou vers l'ancre si présente. */
export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();
  const navigate = useNavigate();
  const lastRouteKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const activeLang = detectPathLanguage(pathname);
    const normalizedPath = stripLanguagePrefix(pathname);

    if (normalizedPath === '/how-it-works' && hash === '#univ-page') {
      const targetPath = activeLang
        ? buildLocalizedPath('/skoleom-page', activeLang)
        : '/skoleom-page';
      navigate(targetPath, { replace: true });
      return;
    }

    const routeKey = `${normalizedPath}${search}${hash}`;
    const isLanguageOnlyChange = lastRouteKeyRef.current === routeKey;
    lastRouteKeyRef.current = routeKey;

    if (isLanguageOnlyChange) {
      return;
    }

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.requestAnimationFrame(() => {
      scrollAppToTop();
    });
  }, [pathname, hash, search, navigate]);

  return null;
}
