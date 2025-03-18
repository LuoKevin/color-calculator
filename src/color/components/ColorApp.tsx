import React from 'react';
import {useState} from 'react';
import colorPicker from './ColorPicker';
import ColorViewer from "./ColorViewer"


function ColorApp() {
    const [colorValue, setColorValue] = useState("")

    return (<div>
        {colorPicker(colorValue, setColorValue)}
        {ColorViewer(colorValue)}
    </div>)
}


export default ColorApp;