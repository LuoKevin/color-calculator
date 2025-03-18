import HSL from '../interfaces/HSL'

export const hslToHex = (hsl:HSL): string => {
  let h = hsl.hue
  let s = hsl.saturation
  let l = hsl.lightness
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round((l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${f(0)}${f(8)}${f(4)}`;
};

