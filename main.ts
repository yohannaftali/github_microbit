music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    basic.showLeds(`
        . . # # .
        . # . # .
        # . . # .
        # . . # #
        # # . . .
        `)
})
basic.forever(function () {
    music.playMelody("C - C - G - G - ", 210)
    music.playMelody("A - A - G G G - ", 210)
    music.playMelody("F - F - E - E - ", 210)
    music.playMelody("D - D - C C C - ", 210)
})
