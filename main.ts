/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Scout Mosley
 * Created on: Oct 2025
 * This program shows count down from 4 and shows Neos.
*/

// variables
let neopixelStrip: neopixel.Strip = null
let loopCounter = 4

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
neopixelStrip.show()

// when "A" is pressed, counts down and shows neo
input.onButtonPressed(Button.A, function () {
while (loopCounter >= 0){
    neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showNumber(loopCounter)
    loopCounter = loopCounter -1
}
})
