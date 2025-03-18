import ColorCalc from "../calculators/ColorCalc";


const colCalc = new ColorCalc()

export default interface ColorWheel {
    mainColor: string;
    complementaryColor: string;
}

export class ColorWheelProvider implements ColorWheel {
    constructor(private readonly color: string) {
        this.mainColor = color
        this.complementaryColor = colCalc.compColor(color)
    }
    mainColor: string
    complementaryColor: string
}