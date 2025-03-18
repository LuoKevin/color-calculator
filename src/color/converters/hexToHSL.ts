import HSL from '../interfaces/HSL'

const hexToHSL = (hex: string): HSL => {
    // Validate and normalize the hex code
    let validHex = hex.replace(/^#/, ""); // Remove '#' if present
    console.log(validHex);
    if (![3, 6].includes(validHex.length)) {
        return {
            hue: 0,
            saturation: 0,
            lightness: 50
        }
    } // Invalid format

    // Convert short hex (e.g., #FFF) to full hex (e.g., #FFFFFF)
    if (validHex.length === 3) {
        validHex = validHex.split("").map((char) => char + char).join("");
    }

    // Extract RGB values
    const r = parseInt(validHex.substring(0, 2), 16) / 255;
    const g = parseInt(validHex.substring(2, 4), 16) / 255;
    const b = parseInt(validHex.substring(4, 6), 16) / 255;

    // Find min and max values for lightness calculation
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    // Calculate lightness
    const l = (max + min) / 2;

    let h = 0;
    let s = 0;

    // Calculate hue
    if (delta !== 0) {
        if (max === r) h = ((g - b) / delta) % 6;
        else if (max === g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);
        if (h < 0) h += 360;
    }

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    const returnHSL: HSL = {
        hue: h,
        saturation: s,
        lightness: l
    }

    return returnHSL;
};

export { hexToHSL };