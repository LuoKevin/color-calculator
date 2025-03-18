export default function rgbCompColor(hex: string): string {
    // Ensure the hex starts with # and is 7 characters long
    if (!hex.startsWith('#')) { hex = '#' + hex }
    if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
        throw new Error("Invalid hex color format. Use #RRGGBB.");
    }

    // Extract and convert hex values to RGB
    const r = 255 - parseInt(hex.substring(1, 3), 16);
    const g = 255 - parseInt(hex.substring(3, 5), 16);
    const b = 255 - parseInt(hex.substring(5, 7), 16);

    // Convert back to hex format
    const compHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return compHex;
}