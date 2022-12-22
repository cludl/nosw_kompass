let x = 0
basic.forever(function () {
    x = input.compassHeading()
    if (x > 315 || x < 45) {
        basic.showString("N")
    } else if (x < 135) {
        basic.showString("O")
    } else if (x < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
