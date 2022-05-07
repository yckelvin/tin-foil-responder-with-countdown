input.onPinPressed(TouchPin.P0, function () {
    Winner = 1
    showID()
})
function showID () {
    if (!(onHold)) {
        onHold = 1
        basic.showNumber(Winner)
        basic.pause(5000)
        countdown()
        basic.clearScreen()
        onHold = 0
    }
}
function countdown () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Square)
}
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onPinPressed(TouchPin.P1, function () {
    Winner = 2
    showID()
})
let Winner = 0
let onHold = 0
onHold = 0
