import React from 'react';
import ColorBox from './ColorBox';

//Displays Color with label

function RowMultDisplay(label: string, colors: string[]) {
    const rowStyle = {
        display: 'inline-block',
    };
    const displayStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
    }
    return (
        <div style={rowStyle}>
            {label}{colors.map(color => (<div style={rowStyle}> {ColorBox(color)}</div>))}
        </div>)
}

export default RowMultDisplay;


// <div style={rowStyle}> {label}  {ColorBox(hex)} </div>
