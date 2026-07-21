/** Fusion profonde de ressources i18n (overlay → base). */
export function mergeResource<T extends Record<string, unknown>>(base: T, overlay: Partial<T>): T {
  const out = { ...base };
  for (const key of Object.keys(overlay) as (keyof T)[]) {
    const value = overlay[key];
    if (value === undefined) continue;
    const existing = out[key];
    if (
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      existing !== null &&
      typeof existing === 'object' &&
      !Array.isArray(existing)
    ) {
      out[key] = mergeResource(
        existing as Record<string, unknown>,
        value as Record<string, unknown>,
      ) as T[keyof T];
    } else {
      out[key] = value as T[keyof T];
    }
  }
  return out;
}
