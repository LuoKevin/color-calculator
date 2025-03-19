import {useState} from 'react';
import colorPicker from './ColorPicker';
import ColorViewer from "./ColorViewer"
import { ColorWheelProvider } from '../interfaces/ColorWheel'

function ColorApp() {
    const [colorWheel, setColorWheel] = useState(new ColorWheelProvider("#FF0000"))

    const appStyle = {
        display: 'flex',
        flexDirection: 'column' as 'column',
    }

    return (<div style={appStyle}>
        <div>{colorPicker(colorWheel, setColorWheel)}</div>
        <div>{ColorViewer(colorWheel)}</div>
    </div>)
}


export default ColorApp;