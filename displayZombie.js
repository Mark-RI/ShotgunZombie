class displayZombie{
	constructor(hero, health, y){
	  this.x = random(-500, -25);
      this.y = y;
      this.angle = 0;
      this.vel = random(1, 1.4);
	  this.r = 46;
	  this.health = health;
      this.moveCount = 0;
      this.moveAnimation = [zombieMove1, zombieMove1, zombieMove2, zombieMove2, zombieMove3, zombieMove3, zombieMove4, zombieMove4, zombieMove5, zombieMove5, zombieMove6, zombieMove6, zombieMove7, zombieMove7, zombieMove8, zombieMove8, zombieMove9, zombieMove9, zombieMove10, zombieMove10, zombieMove11, zombieMove11, zombieMove12, zombieMove12, zombieMove13, zombieMove13, zombieMove14, zombieMove14, zombieMove15, zombieMove15, zombieMove14, zombieMove14, zombieMove13, zombieMove13, zombieMove12, zombieMove12, zombieMove11, zombieMove11, zombieMove10, zombieMove10, zombieMove9, zombieMove9, zombieMove8, zombieMove8, zombieMove7, zombieMove7, zombieMove6, zombieMove6, zombieMove5, zombieMove5, zombieMove4, zombieMove4, zombieMove3, zombieMove3, zombieMove2, zombieMove2];
	}
	
	display(){
      if(this.moveCount > 55){
        this.moveCount = 0;
      }
      push();
      imageMode(CENTER);
      image(this.moveAnimation[this.moveCount], this.x, this.y, this.r, this.r);
      pop();
      this.moveCount += 1;
    }
	
	update(){
      this.x += this.vel;
	}

}
