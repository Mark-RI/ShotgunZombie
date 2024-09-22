 class Barrier{
  constructor(carrier, x, y){
    this.type = "Barrier";
    this.x = x;
    this.y = y;
    this.w = 46;
    this.h = 46;
    this.w2 = 25;
    this.h2 = 27;
    this.isPickedUp = false;
    this.canPickUp = false;
    this.placex = 0;
    this.placey = 0;
    this.ammo = 20;
    this.current = 20;
    this.dropTime = 0;
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
        push();
        imageMode(CENTER);
        image(idle, this.x, this.y, this.w, this.h);
        pop();
      }
    }
    if(this.isPickedUp){
      this.canPickUp = false;
    }
  }
  
  place(){
    this.placex = 50 * (round(hero.x / 50));
    this.placey = 50 * (round(hero.y / 50));
    if(this.canPlace()){
      hero.barriers.push((new placedBarrier(hero, this.placex, this.placey)));
      this.current -= 1;
    }
  }
  
  pickedUp(hero){
    if(((hero.x + (hero.w / 2)) >= this.x) && ((hero.x - (hero.w / 2)) <= this.x + this.w2) && ((hero.y - (hero.h / 2)) <= this.y + this.h2) && ((hero.y + (hero.h / 2)) >= this.y)){
       this.canPickUp = true;
    }else{
      this.canPickUp = false;
    }
  }
  
  canPlace(){
    for(var i = 0; i < hero.barriers.length; i++){
      if(hero.barriers[i].x === this.placex && hero.barriers[i].y === this.placey){
         return false;
      }
    }
    return true;
  }
}