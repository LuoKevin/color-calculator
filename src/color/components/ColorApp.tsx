import {useEffect, useRef, useState} from 'react';
import colorPicker from './ColorPicker';
import ColorViewer from "./ColorViewer"
import { ColorWheelProvider } from '../interfaces/ColorWheel'
import './Color.css';
import { hexToHsl, hslToHex } from '../converters/Equations';
import RaveButton from './RaveButton';


function ColorApp() {
    const [colorWheel, setColorWheel] = useState(new ColorWheelProvider("#FF0000"))
    const [raveTime, setRaveTime] = useState(false)

    const appStyle = {
        // display: 'flex',
        // flexDirection: 'row' as 'row',
    }

    useEffect(() => {
        if(raveTime) {
            let hsl = hexToHsl(colorWheel.mainColor);
            let hue = hsl[0];

            const shiftColor = () => {
                hue = (hue + 1) % 360;
                let newColorWheel = new ColorWheelProvider(hslToHex(hue, hsl[1], hsl[2]))
                setColorWheel(newColorWheel);
            };

            const intervalId = setInterval(shiftColor, 5);

            return () => clearInterval(intervalId)
        }
        else {
            return () => {}
        }
    }, [raveTime]);

    return (<div style={appStyle} className="Color-app">
        <div>{colorPicker(colorWheel, setColorWheel)}</div>
        <div>{ColorViewer(colorWheel)}</div>
        <div>{RaveButton(raveTime, setRaveTime)}</div>
    </div>)
}


export default ColorApp;