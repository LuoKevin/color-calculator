import { hexToHsl, hslToHex } from "../converters/Equations";

export default function triadicColors(hex: string): string[] {
    const [h, s, l] = hexToHsl(hex);

    // Triadic colors (base ± 120°)
    const color1 = (h + 120) % 360;
    const color2 = (h - 120 + 360) % 360;

    return [hex, hslToHex(color1, s, l), hslToHex(color2, s, l)];
}