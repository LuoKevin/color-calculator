import HSL from '../interfaces/HSL'

export  const hslToTuple= (hsl:HSL): [number,number,number] => {
    return  [hsl.hue, hsl.saturation, hsl.lightness]
}