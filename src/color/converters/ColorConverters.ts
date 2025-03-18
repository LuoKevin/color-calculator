import {hexToHSL} from './hexToHSL';
import {hslToHex} from './hslToHex';
import {hslToTuple} from './hslToTuple'


export default class ColorConverters {
    hexToHSL = hexToHSL;
    hslToHex = hslToHex
    hslToTuple = hslToTuple
    hexToTuple = (hex: string) => {
        const hsl = hexToHSL(hex)!
        return [hsl.hue, hsl.saturation, hsl.lightness];
    }
    TupleToHex = (h: number, s: number, l: number): string => {
        return hslToHex({
            hue: h,
            saturation: s,
            lightness: l
        })
    }
}
