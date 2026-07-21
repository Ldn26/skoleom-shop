import { useEffect, useState } from 'react';

/**
 * Hook d'observation d'une media query CSS.
 * Renvoie `true` tant que la query est valide et se met à jour
 * automatiquement lors du redimensionnement / changement d'orientation.
 */
export function useMediaQuery(query: string): boolean {
  const getInitial = (): boolean =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState<boolean>(getInitial);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return matches;
}
