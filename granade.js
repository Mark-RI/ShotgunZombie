class Granade{
  constructor(carrier, x, y){
    this.type = "Granade";
    this.x = x;
    this.y = y;
    this.w = 59;
    this.h = 46;
    this.w2 = 25;
    this.h2 = 27;
    this.isPickedUp = false;
    this.canPickUp = false;
    this.fireIntervalRange = 400;
    this.ammo = 10;
    this.current = 10;
    this.xDisplacement = 23;
    this.yDisplacement = 8;
    this.shootCount = 0;
    this.isShooting = false;
    this.granadeAnimation = [granade_throw_1, granade_throw_2, granade_throw_3, granade_throw_4, granade_throw_5, granade_throw_6, granade_throw_7, granade_throw_8];
  } 

  show(carrier){
    if(this.canPickUp){
    push();
      image(drop, this.x, this.y, this.w2, this.h2);
      pop();
    }else{
      if(this.isPickedUp === false){
         push();
      image(drop, this.x, this.y, this.w2, this.h2);
      pop();
         }else{
      if(this.shootCount > 7){
       this.shootCount = 0;
       this.isShooting = false;
       }
    if(this.isShooting === true){
      push();
      imageMode(CENTER);
      image(this.granadeAnimation[this.shootCount], this.x, this.y, this.w, this.h);
      pop();
      this.shootCount += 1;
    }
    else{
      push();
      imageMode(CENTER);
      image(granade_throw_2, this.x, this.y, this.w, this.h);
      pop();
      }
    }
    }
    if(this.isPickedUp){
      this.canPickUp = false;
    }
  }
  
  pickedUp(hero){
    if(((hero.x + (hero.w / 2)) >= this.x) && ((hero.x - (hero.w / 2)) <= this.x + this.w2) && ((hero.y - (hero.h / 2)) <= this.y + this.h2) && ((hero.y + (hero.h / 2)) >= this.y)){
       this.canPickUp = true;
    }else{
      this.canPickUp = false;
    }
  }
}