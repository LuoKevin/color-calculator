import { hexToHsl, hslToHex } from "../converters/Equations";

export default function rectangleColors(hex: string): string[] {
    const [h, s, l] = hexToHsl(hex);

    // Rectangle colors (base, +60°, +180°, +240°)
    const color1 = (h + 60) % 360;
    const color2 = (h + 180) % 360;
    const color3 = (h + 240) % 360;

    return [hex, hslToHex(color1, s, l), hslToHex(color2, s, l), hslToHex(color3, s, l)];
}