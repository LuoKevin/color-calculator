import ColorCalculator from "../calculators/ColorCalculator";
import rgbCompColor from "../calculators/rgbCompColor";

export default interface ColorWheel {
    mainColor: string;
    complementaryColor: string;
}

let colorCalculator = new ColorCalculator()

export class ColorWheelProvider implements ColorWheel {
    constructor(private readonly color: string) {
        this.mainColor = color
        this.complementaryColor = rgbCompColor(color)
    }
    mainColor: string
    complementaryColor: string
}