let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 9)
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(b)
    b = randint(1, 9)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(a * b)
})
