export const VOLUME_EXPONENT = 2.0;

function clamp01(x: number): number {
  return Math.min(1, Math.max(0, x));
}

export function uiToGain(ui: number): number {
  const u = clamp01(ui);
  if (u <= 0) return 0;
  if (u >= 1) return 1;
  return Math.pow(u, VOLUME_EXPONENT);
}

export function gainToUi(gain: number): number {
  const g = clamp01(gain);
  if (g <= 0) return 0;
  if (g >= 1) return 1;
  return Math.pow(g, 1 / VOLUME_EXPONENT);
} 