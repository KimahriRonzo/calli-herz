let xWert = 0
let yWert = 0
input.onButtonPressed(Button.B, function () {
    xWert = 1
    yWert = 1
    basic.pause(200)
    yWert = 4
    xWert = 2
    yWert = 3
    basic.pause(200)
    xWert = 3
    yWert = 3
    basic.pause(200)
    xWert = 4
    yWert = 3
    basic.pause(200)
    xWert = 5
    yWert = 3
})
basic.forever(function () {
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.Ghost)
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("Win!")
        }
    }
})
