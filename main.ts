input.onGesture(Gesture.Shake, function () {
    music.setBuiltInSpeakerEnabled(true)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Hi SARAH")
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
