radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else if (receivedNumber == 8) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 9) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    } else if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 6) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else {
        basic.showIcon(IconNames.Silly)
    }
})
basic.showIcon(IconNames.Silly)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("X", Math.constrain(input.acceleration(Dimension.X), -1023, 1023))
    radio.sendValue("Y", Math.constrain(input.acceleration(Dimension.Y), -1023, 1023))
})
