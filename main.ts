controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_1.vy == 0) {
        Player_1.vy = -150
    }
})
let Player_1: Sprite = null
scene.setBackgroundColor(14)
Player_1 = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . f f f f f . . . f f f f f f . 
    . f . . . f . . . f . . . . f . 
    . f . . . f . . . f . . . . f . 
    f f f . . f . . . f . . . f f f 
    f f f . . f . . . f . . . f f f 
    . . . . . f . . . f . . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_1, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
