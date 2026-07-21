// hooks/useFavorites.ts
import { useCallback, useEffect, useState } from 'react';

interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

export function useFavorites({ id, title, image, price }: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = useCallback(() => {
    if (!isFavorite) {
      const detail = {
        id,
        title,
        name: title,
        quantity: 1,
        image,
        price,
      };
      try {
        const raw = localStorage.getItem('skoleom:favorites');
        const list = raw ? JSON.parse(raw) : [];
        const next = Array.isArray(list) ? [...list, detail] : [detail];
        localStorage.setItem('skoleom:favorites', JSON.stringify(next));
      } catch {
        console.error('Error adding favorite to localStorage');
      }
      // Nouveau protocole v2
      window.dispatchEvent(new CustomEvent('skoleom:add-favorite', { detail }));
      // Legacy (rétrocompat ancienne extension)
      window.dispatchEvent(
        new CustomEvent('addSkoleomProductToFavorite', { detail, bubbles: true }),
      );
      window.dispatchEvent(new CustomEvent('skoleom:favorites-updated', { detail: {} }));
      window.dispatchEvent(
        new CustomEvent('skoleom:open-sidepage', { detail: { page: 'favorites' } }),
      );
      setIsFavorite(true);
    } else {
      try {
        const list = JSON.parse(localStorage.getItem('skoleom:favorites') || '[]').filter(
          (p: { id: number }) => p.id !== id,
        );
        localStorage.setItem('skoleom:favorites', JSON.stringify(list));
      } catch {
        console.error('Error removing favorite from localStorage');
      }
      // L'extension retire le favori de son store
      window.dispatchEvent(new CustomEvent('skoleom:remove-favorite', { detail: { id, title } }));
      window.dispatchEvent(new CustomEvent('skoleom:favorites-updated', { detail: {} }));
      setIsFavorite(false);
    }
  }, [id, image, isFavorite, price, title]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('skoleom:favorites');
      const list = raw ? JSON.parse(raw) : [];
      const exists = Array.isArray(list) && list.some((p: { id: number }) => p.id === id);
      setIsFavorite(!!exists);
    } catch {
      console.error('Error checking favorite status from localStorage');
    }
  }, [id]);

  return { isFavorite, toggleFavorite };
}
