import React from 'react';
import { SketchPicker, ColorChangeHandler } from 'react-color';


function colorPicker(colorValue: string, setColor:React.Dispatch<React.SetStateAction<string>>)  {

    const onChangeColor: ColorChangeHandler = (color, event) => {
        setColor(color.hex);
    }

    return <SketchPicker
        color={colorValue}
        onChange={onChangeColor}
        onChangeComplete={onChangeColor}

    />;
}

export default colorPicker;
