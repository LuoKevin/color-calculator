import React from 'react';
import ColorWheel from '../interfaces/ColorWheel';
import RowMultDisplay from './RowMultDisplay';

function ColorViewer(colorWheel: ColorWheel) {
    const viewerStyle = {
        display: 'flex',
        justifyContent: 'flex-end'
    }
    let mainColor = colorWheel.mainColor;
    return (
        <div>
            <div style={viewerStyle}>{RowMultDisplay("Main Color", [mainColor])}</div>
            <br/>
            <div style={viewerStyle}>
                {RowMultDisplay("Monochromatic ", colorWheel.monochromaticColors)}
            </div>
            <br/>
            <div style={viewerStyle}>
                {RowMultDisplay("Complementary ", [colorWheel.complementaryColor, mainColor])}
            </div>
            <br/>
            <div style={viewerStyle}>
                {RowMultDisplay("Analogous ", colorWheel.analogousColors.concat(mainColor))}
            </div>
        </div>
    )
}

export default ColorViewer;