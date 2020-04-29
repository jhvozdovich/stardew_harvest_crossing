import Phaser from "phaser";
import farmbg from "./assets/background-image.png";
import witch from "./assets/farmer-walk.png";
import dirt from "./assets/grow/dirt.png";
import sprout from "./assets/grow/sprout.png";
import sounds from "./assets/mines-themes.mp3";
import seeds from "./assets/grow/seeds.png";
import title from "./assets/title.png";

const config = {
  type: Phaser.CANVAS,
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

var text;
var timerEvent
const game = new Phaser.Game(config);


const gameState = {
  num: 0,
  initialTime: 0,
  stageOne: dirt,
  stageTwo: seeds,
  stageThree: sprout,
  counter: 0,
  planted1: false,
  planted2: false,
  planted3: false,
  planted4: false,
  planted5: false,
  planted6: false,
  planted7: false,
  planted8: false,
  planted9: false,
  planted10: false,
  planted11: false,
  planted12: false,
  planted13: false,
  planted14: false,
  music: Audio
}



function preload() {
  this.load.image("title", title );
  this.load.image("farmBackground", farmbg);
  this.load.audio('mines-themes', sounds);
  this.load.spritesheet("witch", witch, { frameWidth: 96, frameHeight: 128});
  this.load.image("tile", dirt);
  this.load.image("sprout", sprout);
  this.load.image("seeds", seeds);
  this.load.image("dirt", dirt)
  
}

function create() {

  let title = this.add.image(352,352, "title");
  let background = this.add.image(352, 352, "farmBackground");
  gameState.seedTileOne = this.add.image(160, 352, "dirt", gameState.dirt);
  gameState.seedTileTwo = this.add.image(224, 352, "dirt", gameState.dirt);
  gameState.seedTileThree = this.add.image(288, 352, "dirt", gameState.dirt);
  gameState.seedTileFour = this.add.image(352, 352, "dirt", gameState.dirt);
  gameState.seedTileFive = this.add.image(416, 352, "dirt", gameState.dirt);
  gameState.seedTileSix = this.add.image(480, 352, "dirt", gameState.dirt);
  gameState.seedTileSeven = this.add.image(544, 352, "dirt", gameState.dirt);
  gameState.seedTileEight = this.add.image(160, 416, "dirt", gameState.dirt);
  gameState.seedTileNine = this.add.image(224, 416, "dirt", gameState.dirt);
  gameState.seedTileTen = this.add.image(288, 416, "dirt", gameState.dirt);
  gameState.seedTileEleven = this.add.image(352, 416, "dirt", gameState.dirt);
  gameState.seedTileTwelve = this.add.image(416, 416, "dirt", gameState.dirt);
  gameState.seedTileThirteen = this.add.image(480, 416, "dirt", gameState.dirt);
  gameState.seedTileFourteen = this.add.image(544, 416, "dirt", gameState.dirt);
  gameState.witchSprite = this.physics.add.sprite(352, 224, "witch");
  gameState.witchSprite.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.witchSprite); 
  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.scoreText = this.add.text(450, 2, 'Crop Total:' + gameState.num, { fontSize: '30px', fill: '#FFFFFF' });
  gameState.counterText = this.add.text(450, 28, 'Counter:'+gameState.counter, { fontSize: '30px', fill: '#FFFFFF' })
  
  gameState.music = this.sound.play('mines-themes', {
    loop: true
  });

  text = this.add.text(32, 32, 'Countdown: ' + formatTime(gameState.initialTime));
 
  timerEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true })
  
  gameState.seedTileOne.setInteractive();
  gameState.seedTileOne.on('pointerup', function(){
    gameState.num += 1;
    gameState.planted1 = true
    game
  });

  gameState.seedTileTwo.setInteractive();
  gameState.seedTileTwo.on('pointerup', function(){
    gameState.num += 1
    gameState.planted2 = true
  });

  gameState.seedTileThree.setInteractive();
  gameState.seedTileThree.on('pointerup', function(){
    gameState.num += 1
    gameState.planted3 = true
  });

  gameState.seedTileFour.setInteractive();
  gameState.seedTileFour.on('pointerup', function(){
    gameState.num += 1
    gameState.planted4 = true
  });

  gameState.seedTileFive.setInteractive();
  gameState.seedTileFive.on('pointerup', function(){
    gameState.num += 1
    gameState.planted5 = true
  });

  gameState.seedTileSix.setInteractive();
  gameState.seedTileSix.on('pointerup', function(){
    gameState.num += 1
    gameState.planted6 = true
  });

  gameState.seedTileSeven.setInteractive();
  gameState.seedTileSeven.on('pointerup', function(){
    gameState.num += 1
  });

  gameState.seedTileEight.setInteractive();
  gameState.seedTileEight.on('pointerup', function(){
    gameState.num += 1
  });
  
  gameState.seedTileNine.setInteractive();
  gameState.seedTileNine.on('pointerup', function(){
    gameState.num += 1
  });
  
  gameState.seedTileTen.setInteractive();
  gameState.seedTileTen.on('pointerup', function(){
    gameState.num += 1
  });
  
  gameState.seedTileEleven.setInteractive();
  gameState.seedTileEleven.on('pointerup', function(){
    gameState.num += 1
  });

  gameState.seedTileTwelve.setInteractive();
  gameState.seedTileTwelve.on('pointerup', function(){
    gameState.num += 1
  });

  gameState.seedTileThirteen.setInteractive();
  gameState.seedTileThirteen.on('pointerup', function(){
    gameState.num += 1
  });

  gameState.seedTileFourteen.setInteractive();
  gameState.seedTileFourteen.on('pointerup', function(){
    gameState.num += 1
  });

  title.setInteractive();
  title.on('pointerup', function(){
    title.setAlpha(0);
    console.log("hello");

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


function formatTime(seconds){
  // Minutes
  var minutes = Math.floor(seconds/60);
  // Seconds
  var partInSeconds = seconds%60;
  // Adds left zeros to seconds
  partInSeconds = partInSeconds.toString().padStart(2,'0');
  // Returns formated time
  return `${minutes}:${partInSeconds}`;
}
function onEvent ()
{
    gameState.initialTime += 1; // One second
    text.setText('Countdown: ' + formatTime(gameState.initialTime));
}



function update () {


  gameState.seedTileOne.on('pointerup', function(){
    gameState.seedTileOne.setTexture("seeds");
    console.log("seeds? " + gameState.seedTileOne.texture.key)
  });
    

  if(gameState.seedTileOne.texture.key === "seeds" && gameState.initialTime !== 0 && gameState.initialTime %15 == 0  && gameState.planted1 == true) {
    gameState.seedTileOne.setTexture("sprout");
    console.log(gameState.initialTime)
  }

  

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

