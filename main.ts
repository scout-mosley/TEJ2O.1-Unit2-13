/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Scout Mosley
 * Created on: Oct 2025
 * This program shows LEDS light around the edges.
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, the pixels around the edge
input.onButtonPressed(Button.A, function () {

    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    // across top right
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(300)
    }
    sprite.delete()

    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(4, 0)

    //down right side
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(300)
    }
    sprite.delete()

    // setup
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(5, 5)
 
    // across bottom left
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(300)
    }
    sprite.delete()

    // setup
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(0, 4)

    // up left side
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(300)
    }
    sprite.delete()

})
