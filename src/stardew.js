export class Farm {
  constructor(farmName){
    this.farmName = farmName,
    this.cropOne = {
      alive=true,
      water: 5,
      age: 0
    }
    this.cropTwo =  {
      alive=true,
      water: 5,
      age: 0
    }
    this.cropThree =  {
      alive=true,
      water: 5,
      age:0
    }
    this.animalOne= {
      health: 15,
      hunger: 15
    };
    this.animalTwo = {
      health: 15,
      hunger: 15
    };
    this.animalThree = {
      health: 15,
      hunger: 15
    };
  }
}

function waterCrop(){
  this.water += 5;
  if(this.water >= 25){
    this.water = 25;
  }if (this.water <= 0){
    alive = false;
  }
}

function increasePlantAge(){
  setInterval(() => {
    this.age++
    if(this.age = 2){
      //harvest function
    }
    if(this.age > 3){
      alive=false;
    }
    
  },300000)
}

function harvest(){
  if(this.cropOne.age == 2 || this.cropTwo.age == 2 || this.cropThree.age == 2){
    //push to array

  }
  else{
    //message saying crops arent ready yet
  }
}






export class Character {
  constructor(charName){
    this.charName = charName;
    this.isAlive = true;
    this.xp= 0;
    this.inventory=[]
    this.stats = {
      health: 100,
      currency: 1500,
      level: 1,
      hunger: 0,
      age: 0
    };
  }
}

export class Companion {
  constructor(petName){
    this.petName = petName;
    this.age = 0;
    this.health = 50;
    this.happy = 25;
    this.bathroom = 0;
    this.hungry = 0;
  }
}






export class Farm {
  constructor(farmName){
    this.farmName = farmName,
    this.cropOne = 0;
    this.cropTwo = 0;
    this.cropThree = 0;
    this.animalOne= {
      health: 15,
      hunger: 15
    };
    this.animalTwo = {
      health: 15,
      hunger: 15
    };
    this.animalThree = {
      health: 15,
      hunger: 15
    };
  }
}

export class Character {
  constructor(charName){
    this.charName = charName;
    this.isAlive = true;
    this.xp= 0;
    this.stats = {
      health: 100,
      currency: 1500,
      level: 1,
      hunger: 0,
      age: 0
    };
  }
}

export class Companion {
  constructor(petName){
    this.petName = petName;
    this.age = 0;
    this.health = 50;
    this.happy = 25;
    this.bathroom = 0;
    this.hungry = 0;
  }
}
