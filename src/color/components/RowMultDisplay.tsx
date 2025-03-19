import React from 'react';
import ColorBox from './ColorBox';

//Displays Color with label

function RowMultDisplay(label: string, colors: string[]) {
    const rowStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
    }

    const labelStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
    }

    const colorBoxStyle = {
        display: 'flex',
        flexDirection: 'column' as 'column',
    }

    return (
        <div>
            <div style={labelStyle}>
                {label}
            </div>
            <div style={rowStyle}>
                {colors.map(color => (<div style={colorBoxStyle}>
                    {ColorBox(color)}
                </div>))}
            </div>
        </div>)
}

export default RowMultDisplay;
