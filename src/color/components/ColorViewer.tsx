import React from 'react';
import ColorCalculator from '../calculators/ColorCalculator'
import ColorWheel from '../interfaces/ColorWheel';

const colorCalculator = new ColorCalculator()
const complementary = colorCalculator.complementary


function ColorViewer(colorWheel: ColorWheel) {
    return (
        <div>
            {ColorBox(colorWheel.mainColor)}
            {ColorBox(colorWheel.complementaryColor)}

        </div>
    )
}

function ColorBox(colorValue: string) {
    const boxStyle = {
        backgroundColor: colorValue,
        width: 100,
        height: 100,
    };

    return (<div style={boxStyle}></div>)
}

export default ColorViewer;