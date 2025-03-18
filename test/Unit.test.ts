import {ColorWheelProvider} from '../src/color/interfaces/ColorWheel'
import {test, expect} from 'vitest'

test('ColorWheel displays correct color', (t) => {
    const color = "101010"
    let wheel = new ColorWheelProvider(color)
    expect(wheel.mainColor).toBe(color)
})

test('ColorWheel contains complementary color', (t) => {
    const color = "#ff0000"
    let wheel = new ColorWheelProvider(color)

    let expected = "#00ffff"
    expect(wheel.complementaryColor).toBe(expected)
})