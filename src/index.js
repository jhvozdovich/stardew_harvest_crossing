import Phaser from "phaser";
import farmbg from "./assets/background-image.png";
import witch from "./assets/farmer-walk.png";
import dirt from "./assets/grow/dirt.png";

const gameState = {}



function preload() {
  this.load.image("farmBackground", farmbg);
  this.load.spritesheet("witch", witch, { frameWidth: 62, frameHeight: 83});
  this.load.image("tile", dirt, {frameWidth: 52, frameHeight: 52});
  //preload dirt tile  ^^^^^ might need to comment out frame width and height
}
// let dirtTile = {
// add: 
// }


function create() {
  let background = this.add.image(300, 300, "farmBackground");
  background.setScale(.5);
  // let tileGrid = new Grid(scene, 0, 0, 600, 600, 54, 54, 0xff0000)
  gameState.witchSprite = this.physics.add.sprite(150, 150, "witch");
  // const platforms = this.physics.add.staticGroup(); possible code for barriers
  // platforms.create(225, 510, 'platform'); // possible code for barriers - needs "platform" collider
  gameState.witchSprite.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.witchSprite); 
  gameState.cursors = this.input.keyboard.createCursorKeys();
  let tileDirt = this.add.image(87, 407, "tile");
  let tileDirt2 = this.add.image(137, 407, "tile");
  //create dirt tile - stand on tile (contact)
  //blocked tiles can't be dirt


  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("witch", {start: 0, end: 2}),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("witch", {start: 3, end: 5}),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: "up",
    frames: this.anims.generateFrameNumbers("witch", {start: 6, end: 8}),
    frameRate: 5 ,
    repeat: -1
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("witch", {start: 9, end: 11}),
    frameRate: 5,
    repeat: -1
  });


}

function update () {

  //plant picture updating with growth

  if (gameState.cursors.right.isDown && gameState.cursors.up.isDown) {
    gameState.witchSprite.x +=3;
    gameState.witchSprite.y -=3;
    gameState.witchSprite.anims.play('right', true);
  } else if (gameState.cursors.right.isDown && gameState.cursors.down.isDown) {
    gameState.witchSprite.x +=3;
    gameState.witchSprite.y +=3;
    gameState.witchSprite.anims.play('right', true);
  } else if (gameState.cursors.left.isDown && gameState.cursors.up.isDown) {
    gameState.witchSprite.x -=3;
    gameState.witchSprite.y -=3;
    gameState.witchSprite.anims.play('left', true);
  } else if (gameState.cursors.left.isDown && gameState.cursors.down.isDown) {
    gameState.witchSprite.x -=3;
    gameState.witchSprite.y +=3;
    gameState.witchSprite.anims.play('left', true);
  } else if (gameState.cursors.right.isDown) {
    gameState.witchSprite.x +=3;
    gameState.witchSprite.anims.play('right', true);
  } else if (gameState.cursors.left.isDown) {
    gameState.witchSprite.x -=3;
    gameState.witchSprite.anims.play('left', true);
  } else if (gameState.cursors.down.isDown) {
    gameState.witchSprite.y +=3;
    gameState.witchSprite.anims.play('down', true);
  } else if (gameState.cursors.up.isDown) {
    gameState.witchSprite.y -=3;
    gameState.witchSprite.anims.play('up', true);
  } else {
    gameState.witchSprite.anims.stop();
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      enableBody: true,
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);
















































































