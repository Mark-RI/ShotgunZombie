class Rifle{
  constructor(carrier, x, y){
    this.type = "Rifle";
    this.x = x;
    this.y = y;
    this.w = 56;
    this.h = 46;
    this.w2 = 25;
    this.h2 = 27;
    this.isPickedUp = false;
    this.canPickUp = false;
    this.fireIntervalRange = 150;
    this.ammo = 200;
    this.current = 200;
    this.damage = 5;
    this.dropTime = 0;
    this.xbulletDisplacement = 23;
    this.ybulletDisplacement = 8;
    this.shootCount = 0;
    this.isShooting = false;
    this.rifleShootAnimation = [rifleshoot1, rifleshoot2];
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
      if(this.shootCount > 1){
       this.shootCount = 0;
       this.isShooting = false;
       }
    if(this.isShooting === true){
      push();
      imageMode(CENTER);
      image(this.rifleShootAnimation[this.shootCount], this.x, this.y, this.w, this.h);
      pop();
      this.shootCount += 1;
    }
    else{
      push();
      imageMode(CENTER);
      image(rifle_idle, this.x, this.y, this.w, this.h);
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