import {hexToHsl, hslToHex} from '../converters/Equations'


export default function analColors(hex: string): string[] {
    const [h, s, l] = hexToHsl(hex);
    const analogous1 = hslToHex((h - 30 + 360) % 360, s, l);
    const analogous2 = hslToHex((h + 30) % 360, s, l);
    return [analogous1, analogous2];
};
