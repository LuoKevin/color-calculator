import {ChromePicker, ColorChangeHandler, SwatchesPicker} from 'react-color';
import ColorWheel, {ColorWheelProvider} from '../interfaces/ColorWheel';
import RaveButton from './RaveButton';


function ColorPicker(colorWheel: ColorWheel, setColor: React.Dispatch<React.SetStateAction<ColorWheelProvider>>) {

    const onChangeColor: ColorChangeHandler = (color, event) => {
        setColor(new ColorWheelProvider(color.hex));
    }

    const colorPickerStyle = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: "3vh",
        justifyContent: "space-around",
    }

    return (
        <div style={colorPickerStyle}>
            <ChromePicker
                color={colorWheel.mainColor}
                onChange={onChangeColor}
                onChangeComplete={onChangeColor}
            />

            <SwatchesPicker color={colorWheel.mainColor}
                            onChange={onChangeColor}
                            onChangeComplete={onChangeColor}
                            height={400}
            />
            <div>{RaveButton(colorWheel, setColor)}</div>
        </div>
    )
}

export default ColorPicker;
