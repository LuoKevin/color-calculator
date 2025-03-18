import React from 'react';
import ColorWheel from '../interfaces/ColorWheel';
import RowDisplay from './RowDisplay';

function ColorViewer(colorWheel: ColorWheel) {
    const viewerStyle = {
        display: 'flex',
        justifyContent: 'flex-end'
    }
    return (
        <div >
            <div style={viewerStyle}>{RowDisplay("Main Color", colorWheel.mainColor)}</div>
            <br />
             {RowDisplay("Complementary Color", colorWheel.complementaryColor)}
        </div>
    )
}

export function ColorBox(colorValue: string) {
    const boxStyle = {
        backgroundColor: colorValue,
        width: 100,
        height: 100,
        display: 'inline-block',
    };

    return (<div style={boxStyle}></div>)
}

export default ColorViewer;