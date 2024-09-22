class thrownGranade{
  constructor(x, y, xVector, yVector, carrier){
    this.type = "thrownGranade";
    this.x = x;
    this.y = y;
    this.w = 5;
    this.h = 5;
    this.count = 0;
    this.explode = false;
    this.area = 150;
    this.xSpd = xVector * 12;
    this.ySpd = yVector * 12;
    this.xOrigin = hero.x;
    this.yOrigin = hero.y;
    this.xOOrigin = hero.x;
    this.yOOrigin = hero.y;
    this.distanceToCover = sqrt((sq(this.x - this.xOrigin)) + (sq(this.y - this.yOrigin)));
    this.distanceCovered = sqrt((sq(this.xOrigin - this.xOOrigin)) + (sq(this.yOrigin - this.yOOrigin)));
  }

  show(carrier){
    this.count += 1;
    push();
      rectMode(CENTER);
      fill(80);
      ellipse(this.xOrigin, this.yOrigin, this.w, this.h);
    pop();
  }
  
  exploded(){
    if(this.count >= 75){
      this.explode = true;
      return true;
    }
    return false;
  }
  
  throw(){
    this.xSpd *= 0.995;
    this.ySpd *= 0.995;
    if(this.distanceCovered < this.distanceToCover){
    this.xOrigin += this.xSpd;
    this.yOrigin += this.ySpd;
    this.distanceCovered = sqrt((sq(this.xOrigin - this.xOOrigin)) + (sq(this.yOrigin - this.yOOrigin)));
  }
  }
}