let pitch = 0
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    pitch = input.lightLevel() * 4
    music.playTone(pitch, music.beat(BeatFraction.Whole))
})
