import Phaser from "phaser";
import farmbg from "./assets/background-image.png";
import witch from "./assets/farmer-walk.png";
import dirt from "./assets/grow/dirt.png";
import sprout from "./assets/grow/sprout.png";
import sounds from "./assets/mines-themes.mp3";
import seeds from "./assets/grow/seeds.png";
import title from "./assets/title.png";
import tomato from "./assets/grow/tomato.png";
import lettuce from "./assets/grow/lettuce.png";
import artichoke from "./assets/grow/artichoke.png";
import peppers from "./assets/grow/peppers.png";
import corn from "./assets/grow/corn.png";
import wateringcan from "./assets/wateringcan.png"

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 1024,
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
  music: Audio
}



function preload() {
  this.load.image("title", title );
  this.load.image("farmBackground", farmbg);
  this.load.audio('mines-themes', sounds);
  this.load.spritesheet("witch", witch, { frameWidth: 96, frameHeight: 128});
  this.load.image("sprout", sprout);
  this.load.image("seeds", seeds);
  this.load.image("dirt", dirt);
  this.load.image("tomato", tomato);
  this.load.image("artichoke", artichoke);
  this.load.image("corn", corn);
  this.load.image("lettuce", lettuce);
  this.load.image("peppers", peppers);
  this.load.image("wateringcan", wateringcan);
}

function create() {
  //game design
  let title = this.add.image(352,352, "title");
  title.setInteractive();
  title.on('pointerup', function(){
    title.setAlpha(0);
  });

  let background = this.add.image(352, 352, "farmBackground");
  gameState.music = this.sound.play('mines-themes', {
    loop: true
  });

  gameState.waterButton = this.add.image(832, 100, "wateringcan");

  //character physics and navigation
  gameState.witchSprite = this.physics.add.sprite(352, 224, "witch");
  gameState.witchSprite.setCollideWorldBounds(true);
  gameState.witchSprite.setDepth(5);
  this.physics.add.collider(gameState.witchSprite); 
  gameState.cursors = this.input.keyboard.createCursorKeys();

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


  //interactable tiles
  gameState.seedTiles = [];
  for (let i = 0; i < 2; i++) {
    for(let j = 0; j < 7; j++) {
      gameState.seedTiles[j + i*7] = this.add.image(160 + 64*j, 352 + 64*i, "dirt", gameState.seedTiles);
      gameState.seedTiles[j + i*7].setInteractive();
      gameState.seedTiles[j + i*7].on('pointerup', function() {
        gameState.num += 1;
      });
      /////////ADD COUNTERS FOR HARVEST INVENTORY
      gameState.seedTiles[j + i*7].on('pointerup', function() {
        if (gameState.seedTiles[j + i*7].texture.key === "tomato" || gameState.seedTiles[j + i*7].texture.key === "corn" || gameState.seedTiles[j + i*7].texture.key === "artichoke" || gameState.seedTiles[j + i*7].texture.key === "lettuce" || gameState.seedTiles[j + i*7].texture.key === "peppers") {
          gameState.seedTiles[j + i*7].setTexture("dirt");
        }
      });
    }
  }

  gameState.waterButton.setInteractive();
  gameState.waterButton.on('pointerup', function() {
    gameState.waterButton.setTint(0x6EBF9C);
  })

  //score counters
  gameState.scoreText = this.add.text(450, 2, 'Crop Total:' + gameState.num, { fontSize: '30px', fill: '#FFFFFF' });
  gameState.counterText = this.add.text(450, 28, 'Counter:'+gameState.counter, { fontSize: '30px', fill: '#FFFFFF' });

  //timer
  text = this.add.text(32, 32, 'Countdown: ' + formatTime(gameState.initialTime));
  timerEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
  
  function formatTime(seconds){
    // Minutes
    var minutes = Math.floor(seconds/60);
    // Seconds
    var partInSeconds = seconds % 60;
    // Adds left zeros to seconds
    partInSeconds = partInSeconds.toString().padStart(2,'0');
    // Returns formated time
    return `${minutes}:${partInSeconds}`;
  }

  function onEvent() {
      gameState.initialTime += 1; // One second
      text.setText('Countdown: ' + formatTime(gameState.initialTime));
  }
}


function update () {  
  //plant logic
  for (let i = 0; i < 14; i++) {
    //watering
    gameState.seedTiles[i].on('pointerdown', function(){
      if (gameState.waterButton.isTinted === true) {
        gameState.seedTiles[i].setTint(0x998056);
      }
    });
    //planting
    gameState.seedTiles[i].on('pointerdown', function(){
      if (gameState.seedTiles[i].texture.key === "dirt") {
        gameState.seedTiles[i].setTexture("seeds");
      }
    });
    //growing
    if(gameState.seedTiles[i].texture.key === "seeds" && gameState.initialTime !== 0 && gameState.initialTime % 15 == 0 && gameState.seedTiles[i].isTinted === true) {
      gameState.seedTiles[i].setTexture("sprout");
      gameState.seedTiles[i].clearTint();
    }
    if(gameState.seedTiles[i].texture.key === "sprout" && gameState.initialTime % 29 == 0 && gameState.seedTiles[i].isTinted === true) {
      let cropArray = ["tomato", "corn", "lettuce", "artichoke", "peppers"];
      let index = Math.floor(Math.random() * 5)
      gameState.seedTiles[i].setTexture(cropArray[index]);
      gameState.seedTiles[i].clearTint();
    }
  }



  //navigation
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