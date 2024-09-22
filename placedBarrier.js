class placedBarrier{
  constructor(carrier, x, y){
    this.type = "placedBarrier";
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.health = 2000;
  }

  show(carrier){
    push();
    imageMode(CENTER);
    image(barrierplaced, this.x, this.y, this.w, this.h);
    pop();
  }
  
}