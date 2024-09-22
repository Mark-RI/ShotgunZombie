class DesertEagle{
  constructor(carrier){
    this.type = "DesertEagle";
    this.x = 0;
    this.y = 0;
    this.w = 46;
    this.h = 46;
    this.fireIntervalRange = 175;
    this.damage = 5;
    this.dropTime = 0;
    this.xbulletDisplacement = 23;
    this.ybulletDisplacement = 11.5;
    this.isShooting = false; 
    this.shootCount = 0;
    this.current = 0;
    this.deagleShootAnimation = [shoot1, shoot2];
  }

  show(carrier){
    // fill(192,192,192);
    // rect(this.x, this.y, this.w, this.h);
    if(this.shootCount > 1){
       this.shootCount = 0;
       this.isShooting = false;
       }
    if(this.isShooting === true){
        push();
        imageMode(CENTER);
        image(this.deagleShootAnimation[this.shootCount], this.x, this.y, this.w, this.h);
        pop();
      this.shootCount += 1;
    }
/**    if(this.moveCount > 18){
      this.moveCount = 0;
      this.isMoving = false;
    }
    if(this.isMoving === true){
      push();
      imageMode(CENTER);
      image(this.moveAnimation[this.moveCount], this.x, this.y, this.w, this.h);
      pop();
      this.moveCount += 1;
    }**/
    else{
    push();
    imageMode(CENTER);
    image(hero_idle, this.x, this.y, this.w, this.h);
    pop();
    }
  }
}