export function hexToRgb(hex: string): { r: number, g: number, b: number } {
    const cleanHex = hex.replace(/^#/, '');
    const r = parseInt(cleanHex.substr(0, 2), 16);
    const g = parseInt(cleanHex.substr(2, 2), 16);
    const b = parseInt(cleanHex.substr(4, 2), 16);
    return {r, g, b};
}

export function rgbToHex(r: number, g: number, b: number): string {
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

export function hexToHsl(hex: string): [number, number, number] {
    // Remove the hash symbol if present
    hex = hex.replace(/^#/, '');

    // Parse the hex color components
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Normalize RGB values to the range 0–1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find the minimum and maximum RGB values
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (delta !== 0) {
        // Saturation
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        // Hue
        switch (max) {
            case r:
                h = (g - b) / delta + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / delta + 2;
                break;
            case b:
                h = (r - g) / delta + 4;
                break;
        }

        h /= 6;
    }

    // Convert HSL to degrees (hue), percentages (saturation and lightness)
    return [h * 360, s * 100, l * 100];
}

export const hslToHex = (h: number, s: number, l: number): string => {
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
