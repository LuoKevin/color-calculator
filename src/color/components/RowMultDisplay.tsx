import React from 'react';
import {ColorBox} from './ColorViewer';

//Displays Color with label

function RowMultDisplay(label: string, colors: string[]) {
    const rowStyle = {
        display: 'inline-block',

    };
    return (
        <div>
            {label}   {colors.map(color => (<div style={rowStyle}> {ColorBox(color)}</div>))}
        </div>)
}

export default RowMultDisplay;


// <div style={rowStyle}> {label}  {ColorBox(hex)} </div>
