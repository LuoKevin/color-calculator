import  HSL from '../interfaces/HSL'
import ColorConverters from '../converters/ColorConverters'

const converter = new ColorConverters()
const tupleToHex = converter.TupleToHex
const complementaryColor = (hex: string): string => {

    let [h,s,l] = converter.hexToTuple(hex)

    return tupleToHex((h + 180) % 360,s,l)
}

export default complementaryColor