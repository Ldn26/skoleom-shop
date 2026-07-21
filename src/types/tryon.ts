import type { Measurements } from '../api/ai';
import type { WooProduct } from '../api/product';

/* ─── Types ──────────────────────────────────────────────────── */
export interface AvatarData {
  avatarId: string;
  photoPreview: string; // local object URL or base64
  bodyMap?: {           // optional skeleton key-points returned by the API
    shoulder: { y: number };
    chest:    { y: number; width: number };
    waist:    { y: number; width: number };
    hip:      { y: number; width: number };
  };
}


export interface Step {
  n: number;
  label: string;
  done: boolean;
}

/* ─── Measurement fields ─────────────────────────────────────── */
export const FIELDS: {
  key: keyof Measurements;
  label: string;
  unit: string;
  min: number;
  max: number;
}[] = [
  { key: 'height', label: 'Taille',         unit: 'cm', min: 140, max: 220 },
  { key: 'weight', label: 'Poids',          unit: 'kg', min: 40,  max: 160 },
  { key: 'chest',  label: 'Poitrine',       unit: 'cm', min: 70,  max: 140 },
  { key: 'waist',  label: 'Tour de taille', unit: 'cm', min: 55,  max: 130 },
];



export interface MeasurementValues {
  height: string;
  weight: string;
  chest: string;
  waist: string;
}

export interface AvatarData {
  avatarId: string;
  photoPreview: string;
  bodyMap?: {
    shoulder: { y: number };
    chest:    { y: number; width: number };
    waist:    { y: number; width: number };
    hip:      { y: number; width: number };
  };
}
