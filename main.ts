basic.showIcon(IconNames.Silly)
radio.setGroup(255)
basic.forever(function () {
    radio.sendValue("X", pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    1023,
    -1023
    ))
    radio.sendValue("Y", pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    1023,
    -1023
    ))
    radio.sendValue("AD", pins.map(
    pins.analogReadPin(AnalogPin.P3),
    288,
    1022,
    734,
    -734
    ))
    radio.sendValue("WS", pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    1023,
    -1023
    ))
})
