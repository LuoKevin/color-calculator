import React from 'react'
import shiftColors from '../features/shiftColors'
import ColorWheelProvider from '../interfaces/ColorWheel'

function RaveButton(raveState: boolean, setRaveState:React.Dispatch<React.SetStateAction<boolean>>) {
    return (<div>
        <button
            onClick={ () => {
                setRaveState(!raveState)
            }}
        >Let's Party!</button>

    </div>)
}


export default RaveButton