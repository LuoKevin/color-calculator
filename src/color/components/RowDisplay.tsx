import React from 'react';
import {ColorBox} from './ColorViewer';
//Displays Color with label

function RowDisplay(label: string, hex:string) {
    const rowStyle = {
        display: 'inline-block',
    };
    return (
      <div style={rowStyle}> {label}  {ColorBox(hex)} </div>
    )
}
export default RowDisplay;