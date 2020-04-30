import Phaser from "phaser";
import farmbg from "./assets/background-image.png";
import witch from "./assets/farmer-walk.png";
import dirt from "./assets/grow/dirt.png";
import sprout from "./assets/grow/sprout.png";
import sounds from "./assets/mines-themes.mp3";
import seeds from "./assets/grow/seeds.png";
import tomato from "./assets/grow/tomato.png";
import lettuce from "./assets/grow/lettuce.png";
import artichoke from "./assets/grow/artichoke.png";
import peppers from "./assets/grow/peppers.png";
import corn from "./assets/grow/corn.png";
import wateringcan from "./assets/wateringcan.png";
import chicken from "./assets/chicken.png";
import scythe from "./assets/scythe.png";
import witchFace from "./assets/character-faces/witch-face-1.png";
import witchFace2 from "./assets/character-faces/witch-face-2.png";
import hills from "./assets/hills.png";
import stardew from "./assets/stardew.png";
import egg from "./assets/egg.png";
import grassEgg from "./assets/grass-egg.png";

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

var timerText;
var timerEvent;
const game = new Phaser.Game(config);


const gameState = {
  numCrops: 0,
  numEggs: 0,
  initialTime: 0,
  stageOne: dirt,
  stageTwo: seeds,
  stageThree: sprout,
  music: Audio
}



function preload() {
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
  this.load.image("scythe", scythe);
  this.load.spritesheet("chicken", chicken, { frameWidth: 64, frameHeight: 64});
  this.load.image('witchFace', witchFace);
  this.load.image('witchFace2', witchFace2);
  this.load.image('hills', hills);
  this.load.image('stardew', stardew);
  this.load.image('egg', egg);
  this.load.image('grassEgg', grassEgg);
}

function create() {
  //loading screen
  let hills = this.add.image(352,352, "hills");
  hills.setDepth(6);
  hills.setScale(0.8);

  let stardew = this.add.image(450, 332, 'stardew');
  stardew.setDepth(7);
  stardew.setScale(1.2);  
  
  let witchFace = this.physics.add.image(352, 352, "witchFace");
  witchFace.setDepth(8);
  witchFace.setScale(0.5);
  witchFace.setVelocity(200, 200);
  witchFace.setBounce(0.5, 1);
  witchFace.setCollideWorldBounds(true);

  let witchFace2 = this.physics.add.image(672, 352, "witchFace2");
  witchFace2.setDepth(8);
  witchFace2.setScale(0.5);
  witchFace2.setVelocity(200, 200);
  witchFace2.setBounce(0.7, 1);
  witchFace2.setCollideWorldBounds(true);

  hills.setInteractive();
  hills.on('pointerup', function() {
    hills.setAlpha(0);
    witchFace.setAlpha(0);
    witchFace2.setAlpha(0);
    stardew.setAlpha(0);   
  });

  
  //platforms.create(600, 400, '');
  
  
  //gamedesign
  let background = this.add.image(352, 352, "farmBackground");
  gameState.music = this.sound.play('mines-themes', {
    loop: true,
    volume: 0.1
  });
  
  // var platforms = this.physics.add.staticGroup();

  // platforms.create(200, 352, 'farmBackground');

  gameState.cropText = this.add.text(760, 620, 'Crop Total:' + gameState.numCrops, { fontSize: '30px', fill: '#FFFFFF' });
  gameState.eggText = this.add.text(760, 650, 'Egg Total:' + gameState.numEggs, { fontSize: '30px', fill: '#FFFFFF' });

  gameState.seedButton = this.add.image(864, 100, "seeds");
  gameState.seedButton.setScale(2);
  gameState.waterButton = this.add.image(864, 300, "wateringcan");
  gameState.waterButton.setScale(2);
  gameState.scytheButton = this.add.image(864, 500, "scythe");
  gameState.scytheButton.setScale(2);

  //character physics and navigation
  gameState.witchSprite = this.physics.add.sprite(352, 224, "witch");
  gameState.chickenSprite = this.physics.add.sprite(550, 200, "chicken");
  gameState.witchSprite.setCollideWorldBounds(true);
  //gameState.witchSprite.setBounds(1000, 0, true);
  //var bounds = new Phaser.Rectangle(100,100,400,400);
  gameState.witchSprite.setDepth(5);
  // gameState.setBounds(0, 120, 120, 200);
  this.physics.add.collider(gameState.witchSprite); 
  gameState.cursors = this.input.keyboard.createCursorKeys();

  this.anims.create ({
    key: "chickenMove",
    frames: this.anims.generateFrameNumbers ("chicken",{start: 0, end: 2}),
    frameRate: 5,
    repeat:-1
  })

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

  // createBlock: function() {
    
  // }

  //interactable tiles
  gameState.seedTiles = [];
  for (let i = 0; i < 2; i++) {
    for(let j = 0; j < 7; j++) {
      gameState.seedTiles[j + i*7] = this.add.image(160 + 64*j, 352 + 64*i, "dirt");
      gameState.seedTiles[j + i*7].setInteractive();
      gameState.seedTiles[j + i*7].on('pointerup', function() {
        gameState.num += 1;
      });
      gameState.seedTiles[j + i*7].on('pointerup', function() {
        if (gameState.scytheButton.isTinted === true && (gameState.seedTiles[j + i*7].texture.key === "tomato" || gameState.seedTiles[j + i*7].texture.key === "corn" || gameState.seedTiles[j + i*7].texture.key === "artichoke" || gameState.seedTiles[j + i*7].texture.key === "lettuce" || gameState.seedTiles[j + i*7].texture.key === "peppers")) {
          gameState.seedTiles[j + i*7].setTexture("dirt");
          gameState.numCrops += 1;
        }
      });
    }
  }

  gameState.eggTile = this.add.image(480, 200, "grassEgg");
  gameState.eggTile.setInteractive();
  gameState.eggTile.on('pointerup', function() {
    if(gameState.eggTile.texture.key === "egg") {
      gameState.numEggs += 1;
      gameState.eggTile.setTexture("grassEgg");
    }
  })

  gameState.waterButton.setInteractive();
  gameState.waterButton.on('pointerup', function() {
    gameState.waterButton.setTint(0x6EBF9C);
    gameState.seedButton.clearTint();
    gameState.scytheButton.clearTint();
  })

  gameState.seedButton.setInteractive();
  gameState.seedButton.on('pointerup', function() {
    gameState.seedButton.setTint(0x6EBF9C);
    gameState.waterButton.clearTint()
    gameState.scytheButton.clearTint();
  })

  gameState.scytheButton.setInteractive();
  gameState.scytheButton.on('pointerup', function() {
    gameState.scytheButton.setTint(0x6EBF9C);
    gameState.waterButton.clearTint()
    gameState.seedButton.clearTint();
  })
  

  //timer
  timerText = this.add.text(32, 32, 'Countdown: ' + formatTime(gameState.initialTime));
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
      timerText.setText('Countdown: ' + formatTime(gameState.initialTime));
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
      if (gameState.seedTiles[i].texture.key === "dirt"  && gameState.seedButton.isTinted === true) {
        gameState.seedTiles[i].setTexture("seeds");
      }
    });
    //growing
    if((gameState.seedTiles[i].texture.key === "dirt"|| gameState.seedTiles[i].texture.key === "tomato" || gameState.seedTiles[i].texture.key === "corn" || gameState.seedTiles[i].texture.key === "artichoke" || gameState.seedTiles[i].texture.key === "lettuce" || gameState.seedTiles[i].texture.key === "peppers") && gameState.initialTime !== 0 && gameState.initialTime % 15 == 0) {
      gameState.seedTiles[i].clearTint();
    }
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

  // egg logic
  if(gameState.initialTime % 30 == 0 && gameState.initialTime !== 0) {
    gameState.eggTile.setTexture("egg");
  }

  //update totals
  gameState.cropText.setText('Crop Total:' + gameState.numCrops);
  gameState.eggText.setText('Egg Total:' + gameState.numEggs);

  
  gameState.chickenSprite.anims.play('chickenMove', true);

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