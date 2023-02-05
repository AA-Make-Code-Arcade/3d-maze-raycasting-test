namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
    export const Text = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.raycastingView)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.tilemapView)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true)
})
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = Render.getRenderSpriteVariable()
mySprite.setPosition(20, 20)
