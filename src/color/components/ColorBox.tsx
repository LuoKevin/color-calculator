import React from 'react'


export default function ColorBox(colorValue: string) {
    const boxStyle = {
        backgroundColor: colorValue,
        width: 100,
        height: 100,
        display: 'inline-block',
    };

    return (<div style={boxStyle}></div>)
}