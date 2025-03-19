import ColorCalc from "../calculators/ColorCalc";

const colCalc = new ColorCalc()

export default interface ColorWheel {
    mainColor: string;
    complementaryColor: string;
    analogousColors: string[];
    monochromaticColors: string[];
}

export class ColorWheelProvider implements ColorWheel {
    constructor(color: string) {
        this.mainColor = color
        this.complementaryColor = colCalc.compColor(color)
        this.analogousColors = colCalc.analColors(color)
        this.monochromaticColors = colCalc.monoColors(color)
    }
    mainColor: string
    complementaryColor: string
    analogousColors: string[]
    monochromaticColors: string[]
}