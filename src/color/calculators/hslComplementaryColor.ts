import ColorConverters from '../converters/ColorConverters'

const converter = new ColorConverters()
const tupleToHex = converter.TupleToHex
export const hslComplementaryColor = (hex: string): string => {
    let [h,s,l] = converter.hexToTuple(hex)
    return tupleToHex((h + 180) % 360,s,l)
}

export default  hslComplementaryColor

