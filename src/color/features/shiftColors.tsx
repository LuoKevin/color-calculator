import React, {useState, useEffect} from 'react'
import {hexToHsl, hslToHex} from '../converters/Equations'


export function shiftColors(initialColor: string, interval = 100) {
    const [color, setColor] = useState(initialColor);

    useEffect(() => {
        let hsl = hexToHsl(initialColor);
        let hue = hsl[0];

        const shiftColor = () => {
            hue = (hue + 1) % 360;
            setColor(hslToHex(hue, hsl[1], hsl[2]));
        };

        const intervalId = setInterval(shiftColor, interval);
        return () => clearInterval(intervalId);
    }, [initialColor, interval]);

    return color;
}