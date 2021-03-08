namespace SpriteKind {
    export const scene = SpriteKind.create()
    export const emailpaypal = SpriteKind.create()
    export const SPAm = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.scene, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function game2 () {
    tiles.setTilemap(tilemap`level1`)
    PANDA = sprites.create(assets.image`villager2WalkRight1`, SpriteKind.Player)
    tiles.placeOnRandomTile(PANDA, assets.tile`myTile4`)
    for (let index = 0; index <= 9; index++) {
        EMAILSPAM = sprites.create(assets.image`sharkAttack4`, SpriteKind.scene)
        emailpaypal = sprites.create(assets.image`sharkAttack5`, SpriteKind.scene)
        emailyellow = sprites.create(assets.image`sharkAttack0`, SpriteKind.scene)
        emailreen = sprites.create(assets.image`sharkAttack2`, SpriteKind.scene)
        brown = sprites.create(assets.image`sharkAttack6`, SpriteKind.scene)
        beige = sprites.create(assets.image`sharkAttack7`, SpriteKind.scene)
        pink = sprites.create(assets.image`sharkAttack8`, SpriteKind.scene)
        purp = sprites.create(assets.image`sharkAttack1`, SpriteKind.scene)
        orane = sprites.create(assets.image`sharkAttack3`, SpriteKind.scene)
        tiles.placeOnRandomTile(purp, assets.tile`myTile0`)
        tiles.placeOnRandomTile(pink, assets.tile`myTile0`)
        tiles.placeOnRandomTile(orane, assets.tile`myTile0`)
        tiles.placeOnRandomTile(emailpaypal, assets.tile`myTile0`)
        tiles.placeOnRandomTile(EMAILSPAM, assets.tile`myTile0`)
        tiles.placeOnRandomTile(emailreen, assets.tile`myTile0`)
        tiles.placeOnRandomTile(brown, assets.tile`myTile0`)
        tiles.placeOnRandomTile(emailpaypal, assets.tile`myTile0`)
        tiles.placeOnRandomTile(emailyellow, assets.tile`myTile0`)
    }
}
function START_SCENE () {
    start_A = false
    tiles.setTilemap(tilemap`level2`)
    story.printCharacterText("Once upon a time there was a panda called kieran")
    panda_cutscene = sprites.create(assets.image`villager2WalkRight0`, SpriteKind.Player)
    tiles.placeOnRandomTile(panda_cutscene, assets.tile`myTile1`)
    story.printCharacterText("One day a panda called Nic told him that a while ago she sent him a code for 1 million bamboo pieces")
    story.printCharacterText("So he looked at his emails and found...")
    story.printCharacterText("you have 3,645 unread emails spread all over your device", "emails")
    story.printCharacterText("So he went and looked for the email.")
    story.printCharacterText("But his phone glitched and created a maze of emails.")
    story.printCharacterText("luckily it narrowed it down to 90 emails")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start_A == true) {
        START_SCENE()
    }
})
let panda_cutscene: Sprite = null
let orane: Sprite = null
let purp: Sprite = null
let pink: Sprite = null
let beige: Sprite = null
let brown: Sprite = null
let emailreen: Sprite = null
let emailyellow: Sprite = null
let emailpaypal: Sprite = null
let EMAILSPAM: Sprite = null
let PANDA: Sprite = null
let start_A = false
start_A = true
tiles.setTilemap(tilemap`level5`)
