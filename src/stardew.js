export class Farm {
  constructor(farmName){
    this.farmName = farmName,
    this.cropOneTotal = 0,
    this.cropTwoTotal = 0
    this.cropThreeTotal = 0,
    this.seedOneTotal = 0,
    this.seedTwoTotal = 0,
    this.seedThreeTotal = 0,
    this.cropOne = {
      alive=true,
      seedPlaneted=false,
      water: 5,
      age: 0
    }
    this.cropTwo =  {
      alive=true,
      seedPlanted = false,
      water: 5,
      age: 0
    }
    this.cropThree =  {
      alive=true,
      water: 5,
      age:0
    }
    this.animalOne = {
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
    
  // Plant Functionality
  planted() {
    if(seedplanted = true){
      increasePlantAge()
    }else{
      console.log("seed not planted");
    }
  }

  waterCrop(){
    this.water += 5;
    if(this.water >= 25){
      this.water = 25;
    }if (this.water <= 0){
      alive = false;
    }
   }
   
   increasePlantAge(){
    setInterval(() => {
      this.age++
      this.water--
      if(this.age = 2){
         harvest()
      }
      if(this.age > 3){
        alive=false;
      }
      
    },150000)
  }

  harvest(){
    if(this.cropOne.age == 2) {
      this.cropOneTotal+= 20;
    } else if (this.cropTwo.age == 2){
      this.cropTwoTotal += 15
    } else if( this.cropThree.age == 2) {
      this.cropThreeTotal += 10
    }  else {
      alert('Not ready for harvest...')
    }
  }
}


export class Character{
 constructor(charName){
  this.charName = charName;
  this.status = status;
  this.isAlive = true;
  this.xp= 0;
  this.inventory={
    food: [

    ]
  }
  this.stats = {
    health: 100,
    currency: 1500,
    level: 1,
    hunger: 0,
    age: 0
  };
 }

// Age & Life Functionality
 increaseAge() {
   setInterval(() => {
    this.stats.age ++;
    return this.stats.age
   }, 60000)
 }

 increaseLife() {
   if(this.stats.age <= 3){
     return "Farmer Boy"
   } else if (this.stats.age >= 4 && this.stats.age <= 6 ){
     return "Junior Farmer"
   } else if (this.stats.age >= 7 && this.stats.age <=9){
     return "Senior Farmer"
   } else if( this.stats.age >= 10 && this.stats.age <= 12){
     return "Legendary Farmer"
   } else if (this.stats.age >= 50){
     return "God Farmer"
   }
 }

 dead(){
   if(this.stats.health <= 0){
      this.stats.health = 0;
      return this.isAlive = false
   }
 }

//  Food Functionality
 eat(){
   this.stats.hunger -=5
   if(this.stats.hunger <= 0 ){
     this.stats.hunger = 0;
   }
 }
 decreaseHunger(){
  setInterval(() => {
    this.stats.hunger +=2
    if(this.stats.hunger == 30){
      this.stats.hunger = 30
      return this.isAlive = false;
    }
  }, 20000)
}

// Level & XP Functionality
increaseXp(){
  setInterval(() => {
    this.xp += 5
  }, 150000)
}

increaseLevel(){
  if(this.xp == 35){
    this.xp = 0
    return this.stats.level ++
  }
}

upgradeStatus(){
 if (this.stats.currency <= 500 && this.stats.level <= 3){
  return this.status = 'Broke'
 } else if (this.stats.currency >= 2001 && this.stats.currency <= 2999 && this.stats.level >= 4 && this.stats.level <= 6){
  return  this.status = 'Wealthy'
 } else if (this.stats.currency >= 3000 && this.stats.currency <=3999 && this.this.stats.level>= 7 && this.this.stats.level <=9){
  return this.status ='Very Wealthy'
 } else if(this.this.status.currency >= 4000 && this.this.status.level >= 10){
   return this.status = "Godlike"
 }
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

  increaseBathroom(){
    setInterval(() => {
      this.bathroom += 1;
      if(this.bathroom == 15){
        this.haveAccident();
      }    
    }, 8000);
  }

  goBathroom(){
    this.bathroom = 0;
    this.happy += 15;
    this.addHealth(15);
    if(this.happy > 25){
      return this.happy = 25;
    }
  }

  haveAccident(){
    this.bathroom = 0;
    this.decreaseHealth(20);
  }
  increaseHunger(){
    setInterval(() => {
      this.hungry --;
      if(this.hungry <= 8 && this.hungry >= 4){
        this.decreaseHealth(15);
      } else if( this.hungry === 0){
        this.decreaseHealth(50);
      } else if(this.hunger < 0)
        this.hungry = 0;
    }, 9000);
  }

  feedFood(){
    this.hungry += 8;
    if(this.hungry <= 0){
      this.hungry = 0;
    } else if(this.hungry >= 30){
      this.hungry = 30;
    }
  }
  decreaseHealth(num){
    this.health -= num;
    if(this.health <= 0){
      this.alive = false;
      this.health = 0;
    }
  }
}
  
