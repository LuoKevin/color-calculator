import { hexToHsl, hslToHex } from "../converters/Equations";

export default function squareColors(hex: string): string[] {
    const [h, s, l] = hexToHsl(hex);

    // Square colors (base, +90°, +180°, +270°)
    const color1 = (h + 90) % 360;
    const color2 = (h + 180) % 360;
    const color3 = (h + 270) % 360;

    return [hex, hslToHex(color1, s, l), hslToHex(color2, s, l), hslToHex(color3, s, l)];
}