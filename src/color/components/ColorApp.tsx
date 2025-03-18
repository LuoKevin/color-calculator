import {useState} from 'react';
import colorPicker from './ColorPicker';
import ColorViewer from "./ColorViewer"
import { ColorWheelProvider } from '../interfaces/ColorWheel'

function ColorApp() {
    const [colorWheel, setColorWheel] = useState(new ColorWheelProvider("#FF0000"))

    return (<div>
        {colorPicker(colorWheel, setColorWheel)}
        {ColorViewer(colorWheel)}
    </div>)
}


export default ColorApp;