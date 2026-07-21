import { useMemo } from 'react';
import { BOUTIQUE_PLACEHOLDER, type CategoryBoutique } from '../../data/categoryBoutiques';
import { UNDER_CONSTRUCTION_PATH } from '../../constants/boutiqueStoreLinks';

/**
 * Carrousel de boutiques auto-défilant (boucle infinie, cartes de taille fixe).
 * Réutilisé sur les pages hub « Pour tous » et « Groupe ».
 * - défilement automatique lent, en boucle (pause au survol) ;
 * - vitesse constante quel que soit le nombre de boutiques ;
 * - placeholder si une boutique n'a pas d'image.
 */
export default function BoutiqueMarquee({
  items,
  ariaLabel,
}: {
  items: readonly CategoryBoutique[];
  ariaLabel?: string;
}) {
  const loop = useMemo(() => [...items, ...items], [items]);
  // ~5 s par boutique → vitesse de défilement homogène entre les pages.
  const duration = Math.max(20, items.length * 5);

  return (
    <div className="bq-marquee" role="region" aria-label={ariaLabel}>
      <div className="bq-marquee__track" style={{ animationDuration: `${duration}s` }}>
        {loop.map((it, i) => {
          const isClone = i >= items.length;
          const content = (
            <>
              <img
                className="bq-marquee__img"
                src={it.img || BOUTIQUE_PLACEHOLDER}
                alt={isClone ? '' : it.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = BOUTIQUE_PLACEHOLDER;
                }}
              />
              <div className="bq-marquee__shade" aria-hidden="true" />
              <div className="bq-marquee__body">
                <span className="bq-marquee__name">{it.name}</span>
              </div>
            </>
          );

          const href = it.href || UNDER_CONSTRUCTION_PATH;
          const isExternal = /^https?:\/\//i.test(href);

          return (
            <a
              key={i}
              className="bq-marquee__card"
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-hidden={isClone || undefined}
              tabIndex={isClone ? -1 : undefined}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
