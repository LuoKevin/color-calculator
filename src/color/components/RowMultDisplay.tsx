import React from 'react';
import ColorBox from './ColorBox';

//Displays Color with label

function RowMultDisplay(label: string, colors: string[]) {
    const rowStyle = {
        display: 'flex',
    }

    const labelStyle = {
        display: 'flex',
    }

    return (
        <div>

            <div style={labelStyle}>
                {label}
            </div>
            <div style={rowStyle}>
                {colors.map(color => (<div> {ColorBox(color)}</div>))}
            </div>
        </div>)
}

export default RowMultDisplay;


// <div style={rowStyle}> {label}  {ColorBox(hex)} </div>
