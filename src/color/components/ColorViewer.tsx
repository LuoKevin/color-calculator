import React from 'react';
import ColorWheel from '../interfaces/ColorWheel';
import RowMultDisplay from './RowMultDisplay';

function ColorViewer(colorWheel: ColorWheel) {
    const viewerStyle = {
        display: 'flex',
        // justifyContent: 'flex-end'
    }
    const boxStyle = {
        // backgroundColor : colorWheel.mainColor
        justifyContent: 'space-between',
    }
    return (
        <div style={boxStyle}>
            <div style={viewerStyle}>
                {RowMultDisplay("Main Color", [colorWheel.mainColor])}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Complementary ", colorWheel.complementaryColor)}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Split Complementary ", colorWheel.splitComplementaryColors)}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Analogous ", colorWheel.analogousColors)}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Triadic ", colorWheel.triadicColors)}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Tetradic(Square) ", colorWheel.squareColors)}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Tetradic(Rectangle) ", colorWheel.rectangleColors)}
            </div>
            <div style={viewerStyle}>
                {RowMultDisplay("Monochromatic ", colorWheel.monochromaticColors)}
            </div>
        </div>
    )
}

export default ColorViewer;