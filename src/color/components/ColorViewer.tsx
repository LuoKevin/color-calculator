import React from 'react';
import ColorCalculator from '../calculators/ColorCalculator'

const colorCalculator = new ColorCalculator()
const complementary = colorCalculator.complementary

function ColorViewer(colorValue: string) {
    return (
        <div>
            {ColorBox(colorValue)}
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