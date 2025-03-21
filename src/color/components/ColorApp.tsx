import {useState} from 'react';
import ColorPicker from './ColorPicker';
import ColorViewer from "./ColorViewer"
import { ColorWheelProvider } from '../interfaces/ColorWheel'
import './Color.css';

function ColorApp() {
    const [colorWheel, setColorWheel] = useState(new ColorWheelProvider("#FF0000"))

    const appStyle = {
        // display: 'flex',
        // flexDirection: 'row' as 'row',
    }

    return (<div style={appStyle} className="Color-app">
        <div>{ColorPicker(colorWheel, setColorWheel)}</div>
        <div>{ColorViewer(colorWheel)}</div>
    </div>)
}

export default ColorApp;
