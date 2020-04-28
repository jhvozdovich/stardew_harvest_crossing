import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
//
// export class Farm {
//   constructor(farmName){
//     this.farmName = farmName,
//     this.cropOne = 0;
//     this.cropTwo = 0;
//     this.cropThree = 0;
//     this.animalOne= {
//       health: 15,
//       hunger: 15
//     };
//     this.animalTwo = {
//       health: 15,
//       hunger: 15
//     };
//     this.animalThree = {
//       health: 15,
//       hunger: 15
//     };
//   }
// }
//
// export class Character {
//   constructor(charName){
//     this.charName = charName;
//     this.isAlive = true;
//     this.xp= 0;
//     this.stats = {
//       health: 100,
//       currency: 1500,
//       level: 1,
//       hunger: 0,
//       age: 0
//     };
//   }
// }
//
// export class Companion {
//   constructor(petName){
//     this.petName = petName;
//     this.age = 0;
//     this.health = 50;
//     this.happy = 25;
//     this.bathroom = 0;
//     this.hungry = 0;
//   }
// }
