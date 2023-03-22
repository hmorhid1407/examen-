input.onButtonPressed(Button.A, function () {
    if (numpant == impares) {
        basic.showNumber(impares + 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    pares = 0
    impares = 0
})
input.onButtonPressed(Button.B, function () {
    if (numpant == pares) {
        basic.showNumber(pares + 1)
    }
})
/**
 * Héctor Moreno S2A
 */
let pares = 0
let impares = 0
let numpant = 0
led.plot(0, 2)
basic.pause(200)
led.plot(1, 2)
basic.pause(200)
led.plot(2, 2)
basic.pause(200)
led.plot(3, 2)
basic.pause(200)
led.plot(4, 2)
if (input.temperature() < 18) {
    music.playTone(175, music.beat(BeatFraction.Whole))
}
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    basic.showNumber(randint(0, 9))
    basic.pause(200)
    if (impares == 5) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    if (pares == 5) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})
