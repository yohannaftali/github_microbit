input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.Foreground)
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    basic.showLeds(`
        . . # # #
        . # . . #
        . # . . #
        . # . # #
        # # . . .
        `)
})
music.playMelody("C - C - G - G - ", 210)
music.playMelody("A - A - G G G - ", 210)
music.playMelody("F - F - E - E - ", 210)
music.playMelody("D - D - C C C - ", 210)
basic.forever(function () {
	
})
