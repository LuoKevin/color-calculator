import ColorCalc from "../calculators/ColorCalc";

const colCalc = new ColorCalc()

export default interface ColorWheel {
    mainColor: string;
    complementaryColor: string[];
    analogousColors: string[];
    monochromaticColors: string[];
    splitComplementaryColors: string[];
    triadicColors: string[];
    squareColors: string[];
}

export class ColorWheelProvider implements ColorWheel {
    constructor(color: string) {
        this.mainColor = color
        this.complementaryColor = [color].concat(colCalc.compColor(color))
        this.analogousColors = [color].concat(colCalc.analColors(color))
        this.monochromaticColors = colCalc.monoColors(color)
        this.splitComplementaryColors = colCalc.splitCompColors(color)
        this.triadicColors = colCalc.triadicColors(color)
        this.squareColors = colCalc.squareColors(color)
    }
    mainColor: string
    complementaryColor: string[]
    analogousColors: string[]
    monochromaticColors: string[]
    splitComplementaryColors: string[]
    triadicColors: string[]
    squareColors: string[]
}