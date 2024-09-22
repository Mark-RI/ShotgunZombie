class placedBarrel{
  constructor(carrier, x, y, area){
    this.type = "placedBarrel";
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.health = 1000;
    this.area = area;
  }

  show(carrier){
    push();
    imageMode(CENTER);
    image(barrelplaced, this.x, this.y, this.w, this.h);
    pop();
  }
  
}