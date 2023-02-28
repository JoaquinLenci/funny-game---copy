controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CORDE.vy == 0) {
        CORDE.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let coin: Sprite = null
let CORDE: Sprite = null
CORDE = sprites.create(img`
    ....dddddddd........
    ....ddfddfdd........
    ....dddddddd.e......
    ....dddddddd........
    ....dffffffd........
    ....dddddddd........
    .....888888.........
    ....d888888d........
    ....d888888d........
    ....d888888d........
    ....dff55ffd...f5...
    ....dff55ffd..ff5...
    ....d888888dffff5...
    .....d....d...ff5...
    .....d....d....f5...
    .....d....d.........
    .....d....d.........
    .....d....d.........
    ....ff....ff........
    ...fff....fff.......
    `, SpriteKind.Player)
scene.setBackgroundColor(14)
scene.setBackgroundImage(img`
    . 
    `)
controller.moveSprite(CORDE, 100, 0)
tiles.setCurrentTilemap(tilemap`level 1`)
CORDE.ay = 350
scene.cameraFollowSprite(CORDE)
for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        . f 5 f f f f f 5 f . . . . . . 
        . f 5 f 5 5 5 f 5 f . . . . . . 
        . f 5 f 5 5 5 f 5 f . . . . . . 
        . f 5 f 5 5 5 f 5 f . . . . . . 
        . f 5 f f f f f 5 f . . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
