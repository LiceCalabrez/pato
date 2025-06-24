mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
let arrow: Sprite = null
let arrow_list: Image[] = []
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . . . . . b 3 b . . . 
        . . . . . . . . . b 3 b . . . . 
        . . . . . . . . . b 3 . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 3 3 3 3 3 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        ...........111....
        ..........1c6c1...
        .......111c6c1....
        ......1cccccc1....
        .....1cc88888c1...
        ....1cc891f8891...
        ....1c881ff894f1..
        ..111c889fc994411.
        .1ccc98888844444c1
        1c999cc96844444c1.
        1cc9888c66666666..
        1f9f88889888888c1.
        1fc9f988c888888c1.
        .1f99ffc9888889c1.
        ..1fc99999888cc1..
        ...1ffffffffcc1...
        ....1111111111....
        ..................
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
bundles.wrap3(function () {
    arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    assets.image`3`
    ]
    arrow = sprites.create(img`
        ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
        .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
        bbdd3dddddddddddddddddddddd3ddbb
        b333dd33333333333333333333dd333b
        bbbdd3333333333333333333333ddbbb
        b33d333d3333333d3333333d3333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333555333333555555333333dbbb
        b33d3335355d3333333533333333d33b
        bbbd333533533533333535555533dbbb
        b33d333535533553333535333533d33b
        bbbd333555333553333535333533dbbb
        b33d3335333353353335353d3533d33b
        bbbd333533335555533535555533dbbb
        b33d333533353333353533333333d33b
        bbbd333333333333333333333333dbbb
        b33d3333333d33333333d3333333d33b
        bbbdd3333333333333333333333ddbbb
        b333dd33333333333333333333dd333b
        bbdd3dddddddddddddddddddddd3ddbb
        b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
        .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
        ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
        `, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
bundles.wrap4(function () {
    carnival.startCountdownGame(15, carnival.WinTypes.Multi)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.splash("Be the quickest to match", "arrow directions to win!")
})
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})
