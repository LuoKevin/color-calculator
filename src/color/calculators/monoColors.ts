import {hexToHsl, hslToHex} from '../converters/Equations'

export default function monoColors(hex: string, numShades: number = 5): string[] {
    const [h, s, l] = hexToHsl(hex);
    let colors = [];

    for (let i = 0; i < numShades; i++) {
        let lightnessFactor = (i - Math.floor(numShades / 2)) * (100 / numShades) * 0.5;
        let newL = Math.max(0, Math.min(100, l + lightnessFactor));
        colors.push(hslToHex(h, s, newL));
    }

    return colors;
}
