import Phaser from "phaser";
import farmbg from "./assets/background-image.png";
import witch from "./assets/farmer.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let witchSprite

const game = new Phaser.Game(config);

function preload() {
  this.load.image("farmBackground", farmbg);
  this.load.image("witch", witch);
}

function create() {
  let background = this.add.image(300, 300, "farmBackground");
  background.setScale(.5);
  witchSprite = this.add.sprite(20, 30, "witch");
}

function update () {
  witchSprite.x += 1;
}






















































