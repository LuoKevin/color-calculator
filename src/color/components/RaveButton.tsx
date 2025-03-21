import React, {useEffect, useState } from 'react'
import { hexToHsl, hslToHex } from '../converters/Equations';
import { ColorWheelProvider } from '../interfaces/ColorWheel';

function RaveButton(
    colorState: ColorWheelProvider,
    setColor:React.Dispatch<React.SetStateAction<ColorWheelProvider>>
) {

    const [raveState, setRaveState] = useState(false)

    useEffect(() => {
        if(raveState) {
            let hsl = hexToHsl(colorState.mainColor);
            let hue = hsl[0];
            let saturation = hsl[1];
            let lightness = hsl[2];

            const shiftColor = () => {
                hue = (hue + 5) % 360;
                saturation = (saturation + 0.5) % 100
                lightness = (lightness + 0.5) % 100;
                let newColorWheel = new ColorWheelProvider(hslToHex(hue, 100, 50))
                setColor(newColorWheel);
            };

            const intervalId = setInterval(shiftColor, 10);

            return () => clearInterval(intervalId)
        }
        else {
            return () => {}
        }
    }, [raveState]);

    return (<div>
        <button
            onClick={ () => {
                setRaveState(!raveState)
            }}
        >Let's Party!</button>

    </div>)
}


export default RaveButton