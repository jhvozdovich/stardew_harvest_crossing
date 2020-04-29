import Phaser from "phaser";
import farmbg from "./assets/background-image.png";
import witch from "./assets/farmer-walk.png";
import dirt from "./assets/grow/dirt.png";
import sprout from "./assets/grow/sprout.png";
import sounds from "./assets/mines-themes.mp3";
import seeds from "./assets/grow/seeds.png";

const gameState = {
  num: 0,
  stageOne: dirt,
  stageTwo: seeds,
  stageThree: sprout,
  counter: 0,
  music: Audio
}

function preload() {
  this.load.image("farmBackground", farmbg);
  this.load.audio('mines-themes', sounds);
  this.load.spritesheet("witch", witch, { frameWidth: 96, frameHeight: 128});
  this.load.image("tile", dirt);
  this.load.image("sprout", sprout);
  this.load.image("seeds", seeds);
  this.load.image("dirt", dirt)
}

function create() {
  let background = this.add.image(352, 352, "farmBackground");
  gameState.seedTileOne = this.add.image(150,450,"dirt", gameState.dirt );
  gameState.seedTileTwo = this.add.image(150, 375,"dirt", gameState.dirt );
  gameState.seedTileThree = this.add.image(150, 300,"dirt", gameState.dirt  );
  gameState.witchSprite = this.physics.add.sprite(150, 150, "witch");
  gameState.witchSprite.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.witchSprite); 
  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.scoreText = this.add.text(450, 18, 'Crop Total:' + gameState.num, { fontSize: '30px', fill: '#FFFFFF' });
  gameState.counterText = this.add.text(450, 25, 'Counter:'+gameState.counter, { fontSize: '30px', fill: '#FFFFFF' })
  gameState.music = this.sound.play('mines-themes');

  gameState.seedTileOne.setInteractive();
  
  gameState.seedTileOne.on('pointerup', function(){
    gameState.num += 1
  });

  gameState.seedTileTwo.setInteractive();

  gameState.seedTileTwo.on('pointerup', function(){
    gameState.num += 1
  });

  gameState.seedTileThree.setInteractive();
 
  gameState.seedTileThree.on('pointerup', function(){
    gameState.num += 1
  });
  
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("witch", {start: 3, end: 5}),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("witch", {start: 0, end: 2}),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: "up",
    frames: this.anims.generateFrameNumbers("witch", {start: 6, end: 8}),
    frameRate: 5,
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

gameState.scoreText.setText('Crop Total:' + gameState.num)
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
  width: 704,
  height: 704,
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
















































































