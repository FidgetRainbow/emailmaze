namespace SpriteKind {
    export const scene = SpriteKind.create()
    export const emailpaypal = SpriteKind.create()
    export const SPAm = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.scene, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() == 90) {
        tiles.setTilemap(tilemap`level3`)
        story.printCharacterText("I FOUND IT", "Kieran")
        story.printCharacterText("and he clicked the link")
        bamboo = sprites.create(assets.image`log8`, SpriteKind.Player)
        for (let index = 0; index <= 89; index++) {
            tiles.placeOnRandomTile(bamboo, assets.tile`myTile0`)
        }
        story.printCharacterText("Thats a little too much", "Kieran")
        game.over(true)
    }
})
function game2 () {
    panda_cutscene.destroy()
    tiles.setTilemap(tilemap`level1`)
    PANDA = sprites.create(assets.image`villager2WalkRight1`, SpriteKind.Player)
    tiles.placeOnRandomTile(PANDA, assets.tile`myTile4`)
    scene.cameraFollowSprite(PANDA)
    controller.moveSprite(PANDA)
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
        tiles.placeOnRandomTile(purp, assets.tile`myTile1`)
        tiles.placeOnRandomTile(pink, assets.tile`myTile1`)
        tiles.placeOnRandomTile(orane, assets.tile`myTile1`)
        tiles.placeOnRandomTile(emailpaypal, assets.tile`myTile1`)
        tiles.placeOnRandomTile(EMAILSPAM, assets.tile`myTile1`)
        tiles.placeOnRandomTile(emailreen, assets.tile`myTile1`)
        tiles.placeOnRandomTile(brown, assets.tile`myTile1`)
        tiles.placeOnRandomTile(emailpaypal, assets.tile`myTile1`)
        tiles.placeOnRandomTile(emailyellow, assets.tile`myTile1`)
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
    game2()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start_A == true) {
        START_SCENE()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnRandomTile(PANDA, assets.tile`myTile12`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnRandomTile(PANDA, assets.tile`myTile13`)
})
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
let panda_cutscene: Sprite = null
let bamboo: Sprite = null
let start_A = false
info.setScore(0)
start_A = true
tiles.setTilemap(tilemap`level5`)
