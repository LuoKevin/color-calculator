const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
    hex = hex.replace(/^#/, "");

    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h = 0,
        s = 0,
        l = (max + min) / 2;

    if (max !== min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = Math.round(h * 60);
    }

    return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
};

const hslToHex = (h: number, s: number, l: number): string => {
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

export default function analColors(hex: string): string[] {
    const { h, s, l } = hexToHSL(hex);
    const analogous1 = hslToHex((h - 30 + 360) % 360, s, l);
    const analogous2 = hslToHex((h + 30) % 360, s, l);
    return [analogous1, analogous2];
};
