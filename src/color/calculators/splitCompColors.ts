import { hexToHsl, hslToHex } from "../converters/Equations";

export default function splitCompColors(hex: string): string[] {
    const [h, s, l] = hexToHsl(hex);

    // Split-Complementary colors (base ± 150°)
    const color1 = (h + 150) % 360;
    const color2 = (h - 150 + 360) % 360;

    return [hex, hslToHex(color1, s, l), hslToHex(color2, s, l)];
}
