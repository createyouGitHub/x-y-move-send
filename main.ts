radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 8) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 9) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 6) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
basic.showIcon(IconNames.Silly)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("X", pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    828,
    828,
    -828
    ))
    radio.sendValue("Y", pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    828,
    828,
    -828
    ))
    radio.sendValue("左右", pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    826,
    -826,
    826
    ))
    radio.sendValue("上下", pins.map(
    pins.analogReadPin(AnalogPin.P3),
    280,
    840,
    -840,
    840
    ))
})
