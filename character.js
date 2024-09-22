class Character{
  constructor(){
    this.x = 500;
    this.y = 300;
    this.w = 46;
    this.h = 46;
    this.weapon_number = 0;
    this.weapons = [];
    this.pickups = [];
    this.barriers = [];
    this.angle = 0;
    this.turretAngle = 0;
    this.range = 250;
    this.vel = 2;
    this.health = 25;
    this.colorR = 255;
    this.colorG = 255;
    this.colorB = 255;
    this.colorBHealth = 0;
    this.colorRHealth = 0;
    this.colorGHealth = 255;
    this.healthw = 35;
    this.healthh = 5;
    this.ydir = 0;
    this.xdir = 1;
  }
  
  show(){
//    image(hero_idle, this.x, this.y, this.w, this.h);
//    fill(this.colorR, this.colorG, this.colorB, this.colorA)
//    ellipse(this.x, this.y, this.w, this.h);
  }
  move_up(){
    this.y -= this.vel;
  }
  move_down(){
    this.y += this.vel;
  }
  move_right(){
    this.x += this.vel;
  }
  move_left(){
    this.x -= this.vel;
  }
  
  showHealthBar(){
    push();
    fill(255, 255, 255);
    rect(this.x - this.w / 2, this.y - this.h / 1.3, 35, this.healthh);
    fill(this.colorRHealth, this.colorGHealth, this.colorBHealth);
    rect(this.x - this.w / 2, this.y - this.h / 1.3, this.healthw, this.healthh);
    pop();
  }
  
  showWeaponInfo(){
    push();
    textAlign(CENTER);
    textFont('Helvetica');
    textSize(12);
    fill(0);
    text(str(this.weapons[this.weapon_number].type + ' ' + this.weapons[this.weapon_number].current) , this.x, this.y - this.h / 1.2);
    pop();
  }
  
  switch_weapon(){
    // this.weapon_number += 1;
    if((this.weapons.length - 1) < this.weapon_number){
      this.weapon_number = 0;
    }
    if(this.weapon_number === -1){
      this.weapon_number = this.weapons.length - 1;
    }
  }
  pickup(){
    for (var i = 0; i < hero.pickups.length; i++){
	  hero.pickups[i].x;
	  hero.pickups[i].update();
	}
  }
  hitScan(){
		for (var i = 0; i < targetBalloons.length; i++){
			var collideOrNot = collideCircleCircle(this.x, this.y, 30, targetBalloons[i].myX(), targetBalloons[i].myY(), targetBalloons[i].myR())
			if (collideOrNot){
				return true;
			}
		}
		return false;
  }
  turretShoot(){
    for (var i = 0; i < this.barriers.length; i++){
      if(this.barriers[i].type === "Turret"){
        
      }
    }
  }
  
  collisionRight(){
    for (var i = 0; i < this.barriers.length; i++){
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x, this.y, this.w))){
        return false;
      }
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y -25, this.barriers[i].w, this.barriers[i].h, this.x + this.vel, this.y, this.w))){
        return true;
      }
    } 
    return false;
  }
  
  collisionLeft(){
    for (var i = 0; i < this.barriers.length; i++){
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x, this.y, this.w))){
        return false;
      }
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x - this.vel, this.y, this.w))){
        return true;
      }
    }
    return false;
  }
  
  collisionDown(){
    for (var i = 0; i < this.barriers.length; i++){
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x, this.y, this.w))){
        return false;
      }
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x, this.y + this.vel, this.w))){
        return true;
      }
    }
    return false;
  }
  
  collisionUp(){
    for (var i = 0; i < this.barriers.length; i++){
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x, this.y, this.w))){
        return false;
      }
      if((collideRectCircle(this.barriers[i].x - 25, this.barriers[i].y - 25, this.barriers[i].w, this.barriers[i].h, this.x, this.y - this.vel, this.w))){
        return true;
      }
    }
    return false;
  }
  
  
  outOfBounds(){
    if(((this.x + this.vel) > (width-50)) || ((this.x - this.vel) < 50) || ((this.y + this.vel) > (height-100)) || ((this.y - this.vel) < 100)){
          return true;
        }
        return false;
	}
}