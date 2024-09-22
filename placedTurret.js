class placedTurret{
  constructor(carrier, x, y){
    this.turretBulletsFired = [];
    this.type = "placedTurret";
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.fireIntervalRange = 400;
    this.health = 5000;
    this.healthw = 35;
    this.healthh = 5;
    this.colorBHealth = 0;
    this.colorRHealth = 0;
    this.colorGHealth = 255;
  }

  show(carrier){
    push();
      noStroke();
      rectMode(CENTER);
      fill(150,150,150);
      rect(this.x, this.y, this.w, this.h);
    pop();
  }
  
  showBarrel(carrier){
    push();
    imageMode(CENTER);
    image(turretbarrel, 0, 0, 60, 25);
    pop();
  }
  
  showHealthBar(){
  if((this.health / 4000) > 0.8){
    this.colorBHealth = 0;
    this.colorRHealth = 0;
    this.colorGHealth = 255;
    }
  else if((this.health / 4000) > 0.6){
    this.colorBHealth = 0;
    this.colorRHealth = 128;
    this.colorGHealth = 255;
          }
  else if((this.health / 4000) > 0.4){
    this.colorBHealth = 0;
    this.colorRHealth = 255;
    this.colorGHealth = 255;
          }
  else if((this.health / 4000) > 0.2){
    this.colorBHealth = 0;
    this.colorRHealth = 255;
    this.colorGHealth = 128;
          }
  else{
    this.colorBHealth = 0;
    this.colorRHealth = 255;
    this.colorGHealth = 0;
  }
    this.health -= 1;
    push();
    fill(255, 255, 255);
    rect(this.x - this.w / 2, this.y - this.h / 1.3, 35, this.healthh);
    fill(this.colorRHealth, this.colorGHealth, this.colorBHealth);
    rect(this.x - this.w / 2, this.y - this.h / 1.3, this.healthw * (this.health / 5000), this.healthh);
    pop();
  }
}