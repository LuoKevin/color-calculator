import React from 'react';
import ColorWheel from '../interfaces/ColorWheel';
import RowDisplay from './RowDisplay';
import RowMultDisplay from './RowMultDisplay';

function ColorViewer(colorWheel: ColorWheel) {
    const viewerStyle = {
        display: 'flex',
        justifyContent: 'flex-end'
    }
    return (
        <div >
            <div style={viewerStyle}>{RowDisplay("Main Color", colorWheel.mainColor)}</div>
            <br />
            <div style={viewerStyle}>{RowMultDisplay("Complementary Color", [colorWheel.complementaryColor])}</div>
            <br />
            <div style={viewerStyle}>{RowMultDisplay("Analogous Colors", colorWheel.analogousColors)}</div>
        </div>
    )
}

export default ColorViewer;