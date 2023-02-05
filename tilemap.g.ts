// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000100000001000001000001010100000001010000010000010001010101010000010100000000000100010001010101000000000000000001000100010101010000000000010101010001000101010100010101010100000000010001010101000000000000000000000000010101000001000001010100000101010101010000010000010000000000000001010100000100000100000000010000010100000001000001010101000101010101000001010000000000010001000001010000010100000101010100010000010100000101000000000001000000020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . 2 . . 2 . . 2 2 
2 . . . 2 2 . . 2 . . 2 . 2 2 2 
2 2 . . 2 2 . . . . . 2 . 2 . 2 
2 2 2 . . . . . . . . 2 . 2 . 2 
2 2 2 . . . . . 2 2 2 2 . 2 . 2 
2 2 2 . 2 2 2 2 2 . . . . 2 . 2 
2 2 2 . . . . . . . . . . . . 2 
2 2 . . 2 . . 2 2 2 . . 2 2 2 2 
2 2 . . 2 . . 2 . . . . . . . 2 
2 2 . . 2 . . 2 . . . . 2 . . 2 
2 . . . 2 . . 2 2 2 2 . 2 2 2 2 
2 . . 2 2 . . . . . 2 . 2 . . 2 
2 . . 2 2 . . 2 2 2 2 . 2 . . 2 
2 . . 2 2 . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
