import React from 'react';
import { ChromePicker, ColorChangeHandler } from 'react-color';
import ColorWheel, { ColorWheelProvider } from '../interfaces/ColorWheel';


function colorPicker(colorWheel: ColorWheel, setColor:React.Dispatch<React.SetStateAction<ColorWheelProvider>>)  {

    const onChangeColor: ColorChangeHandler = (color, event) => {
        setColor(new ColorWheelProvider(color.hex));
    }

    return <ChromePicker
        color={colorWheel.mainColor}
        onChange={onChangeColor}
        onChangeComplete={onChangeColor}

    />;
}

export default colorPicker;
