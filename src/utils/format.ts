import { EUR_TO_USD } from '../constants/app';

/**
 * Utilitaires de formatage monétaire.
 * Centralisés ici pour garantir la cohérence des conversions EUR → USD
 * dans toute l'application.
 */

/** Convertit un montant numérique EUR en chaîne USD à 2 décimales. */
export const formatUsd = (eur: number | undefined | null): string =>
  `${(Number(eur ?? 0) * EUR_TO_USD).toFixed(2)} $`;

/**
 * Convertit une valeur d'affichage potentiellement libellée en euros
 * (ex. "194M€", "825k€") vers la même mise en forme en dollars.
 * Renvoie la valeur telle quelle si elle ne contient pas de symbole €.
 */
export function toUsdDisplay(
  val: string | number | null | undefined,
): string | number | null | undefined {
  if (val === null || val === undefined) return val;
  const str = String(val);
  if (!str.includes('€')) return str;

  // Capture : [1] nombre éventuellement décimal, [2] suffixe (k, M, B) optionnel
  const match = str.match(/([0-9]+(?:[.,][0-9]+)?)\s*([kKmMbB])?\s*€/);
  if (!match) return str.replace(/€/g, '$');

  const numeric = Number(match[1].replace(',', '.'));
  if (!Number.isFinite(numeric)) return str.replace(/€/g, '$');

  const suffix = match[2] ?? '';
  const converted = numeric * EUR_TO_USD;
  const decimals = suffix ? 1 : 2;
  return `${converted.toFixed(decimals)}${suffix}$`;
}
