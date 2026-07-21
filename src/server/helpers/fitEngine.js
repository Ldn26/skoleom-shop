/**
 * fitEngine.js — Reco de taille deterministe (aucun score invente).
 */

const SIZE_CHART = {
  XS:  { chest: [82, 87],   waist: [66, 72] },
  S:   { chest: [88, 95],   waist: [73, 80] },
  M:   { chest: [96, 103],  waist: [81, 88] },
  L:   { chest: [104, 111], waist: [89, 96] },
  XL:  { chest: [112, 119], waist: [97, 104] },
  XXL: { chest: [120, 127], waist: [105, 112] },
};

const SIZES = Object.keys(SIZE_CHART);
const mid = ([lo, hi]) => (lo + hi) / 2;

function pickSize(chest) {
  let best = 'M';
  let bestDist = Infinity;
  for (const size of SIZES) {
    const d = Math.abs(chest - mid(SIZE_CHART[size].chest));
    if (d < bestDist) { bestDist = d; best = size; }
  }
  return best;
}

function computeFit(m = {}, product = {}) {
  const chest = Number(m.chest);
  const waist = Number(m.waist);

  if (!chest || Number.isNaN(chest)) {
    return {
      recommendedSize: product.recommendedSize || 'M',
      fitScore: null,
      fit: 'Inconnu',
      confidence: 'Faible',
      comment: 'Tour de poitrine manquant : calcul impossible.',
    };
  }

  const recommendedSize = pickSize(chest);
  const band   = SIZE_CHART[recommendedSize];
  const center = mid(band.chest);
  const halfW  = (band.chest[1] - band.chest[0]) / 2;

  const chestDev = Math.abs(chest - center) / halfW;

  let waistPenalty = 0;
  if (waist) {
    if (waist < band.waist[0]) waistPenalty = (band.waist[0] - waist) / 10;
    if (waist > band.waist[1]) waistPenalty = (waist - band.waist[1]) / 10;
  }

  let fitScore = 99 - chestDev * 12 - waistPenalty * 8;
  fitScore = Math.max(60, Math.min(99, Math.round(fitScore * 10) / 10));

  let fit = 'Parfait';
  const signed = (chest - center) / halfW;
  if (signed > 1)         fit = 'Tres serre';
  else if (signed > 0.6)  fit = 'Legerement serre';
  else if (signed < -1)   fit = 'Tres ample';
  else if (signed < -0.6) fit = 'Legerement ample';

  const confidence = chestDev < 0.5 ? 'Haute' : chestDev < 0.9 ? 'Moyenne' : 'Faible';

  const comment =
    fit === 'Parfait'
      ? `Taille ${recommendedSize} ideale pour vos mensurations.`
      : `Taille ${recommendedSize} recommandee - coupe ${fit.toLowerCase()}.`;

  return { recommendedSize, fitScore, fit, confidence, comment };
}

module.exports = { computeFit, SIZE_CHART };