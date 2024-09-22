class balloon{
	constructor(hero, health){
	  this.x = random(0, 2);
      if(int(this.x) === 0){
        this.x = -200;
      }else{
        this.x = 1200;
      }
      this.movedBack = false;
      this.y = random(150, 450);
      this.angle = 0;
      this.xOrigin = this.x;
      this.yOrigin = this.y;
	  this.targetX = hero.x;
	  this.targetY = hero.y;
	  this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
	  this.targetDir.normalize();
	  this.xSpd = this.targetDir.x * 1.2;
	  this.ySpd = this.targetDir.y * 1.2;
	  this.r = 46;
      this.times = 0;
      this.times2 = 0;
      this.times3 = 0;
	  this.health = health;
      this.perpVector1 = createVector(this.targetDir.y, -this.targetDir.x);
      this.perpVector1.normalize();
      this.xSpdPerp1 = this.perpVector1.x * 1.2;
	  this.ySpdPerp1 = this.perpVector1.y * 1.2;
      this.perpVector2 = createVector(-this.targetDir.y, this.targetDir.x);
      this.perpVector2.normalize();
      this.xSpdPerp2 = this.perpVector2.x * 1.2;
	  this.ySpdPerp2 = this.perpVector2.y * 1.2;
      this.moveCount = 0;
      this.isMoving = false;
      this.collisionAngle = 0;
      this.stopCounter = 0;
      this.moveAnimation = [zombieMove1, zombieMove1, zombieMove2, zombieMove2, zombieMove3, zombieMove3, zombieMove4, zombieMove4, zombieMove5, zombieMove5, zombieMove6, zombieMove6, zombieMove7, zombieMove7, zombieMove8, zombieMove8, zombieMove9, zombieMove9, zombieMove10, zombieMove10, zombieMove11, zombieMove11, zombieMove12, zombieMove12, zombieMove13, zombieMove13, zombieMove14, zombieMove14, zombieMove15, zombieMove15, zombieMove14, zombieMove14, zombieMove13, zombieMove13, zombieMove12, zombieMove12, zombieMove11, zombieMove11, zombieMove10, zombieMove10, zombieMove9, zombieMove9, zombieMove8, zombieMove8, zombieMove7, zombieMove7, zombieMove6, zombieMove6, zombieMove5, zombieMove5, zombieMove4, zombieMove4, zombieMove3, zombieMove3, zombieMove2, zombieMove2];
      this.attackAnimation = [zombieAttack1, zombieAttack1, zombieAttack2, zombieAttack2, zombieAttack3, zombieAttack3, zombieAttack4, zombieAttack4, zombieAttack5, zombieAttack5, zombieAttack6, zombieAttack6, zombieAttack7, zombieAttack7, zombieAttack8, zombieAttack8, zombieAttack9, zombieAttack9];
      this.attackCount = 0;
	}
	
	display(hero){
    if(this.moveCount > 55){
      this.moveCount = 0;
      this.isMoving = false;
    }
    if(this.isMoving === true){
        push();
        imageMode(CENTER);
        image(this.moveAnimation[this.moveCount], 0, 0, this.r, this.r);
        pop();
      this.moveCount += 1;
    }
    else{
      if(this.attackCount > 17){
        this.attackCount = 0;
      }
      push();
      imageMode(CENTER);
      image(this.attackAnimation[this.attackCount], 0, 0, this.r, this.r);
      pop();
      this.attackCount += 1;
    }
  }
	
	update(hero){
      this.angle = atan2(hero.y - this.y, hero.x - this.x);
      this.targetX = hero.x;
	  this.targetY = hero.y;
      this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
      this.targetDir.normalize();
      this.xSpd = this.targetDir.x * 1.2;
	  this.ySpd = this.targetDir.y * 1.2;
      this.perpVector1 = createVector(this.targetDir.y, -this.targetDir.x);
      this.perpVector1.normalize();
      this.xSpdPerp1 = this.perpVector1.x * 1.2;
	  this.ySpdPerp1 = this.perpVector1.y * 1.2;
      this.perpVector2 = createVector(-this.targetDir.y, this.targetDir.x);
      this.perpVector2.normalize();
      this.xSpdPerp2 = this.perpVector2.x * 1.2;
	  this.ySpdPerp2 = this.perpVector2.y * 1.2;
//    this.x += this.xSpd;
//	  this.y += this.ySpd;
      
/** for (i = 0; i < targetBalloons.length; i++){
      var d = dist(targetBalloons.x + this.xSpd, targetBalloons.y + this.ySpd, targetBalloons[i].x, targetBalloons[i].y)
        if(d < 36){
          this.times += 1;
        }
        if(this.times === 1){
	      this.x += this.xSpd;
	      this.y += this.ySpd;
          this.times = 0;
        }
      }**/
      
	}
    move(hero){
      if(((this.y + this.ySpd) > 45 && (this.y + this.ySpd) < height-45) && this.stopCounter === 0){
        this.isMoving = true;
	    this.x += this.xSpd;
	    this.y += this.ySpd;
        this.zombieOverlap();
      }if(this.stopCounter > 0){
          this.stopCounter += 1;
      }if(this.stopCounter > 10){
        this.stopCounter = 0;
      }
    }
    movePerp1(hero){
      if(((this.y + this.ySpdPerp1) > 45 && (this.y + this.ySpdPerp1) < height-45) && this.stopCounter === 0){
        this.isMoving = true;
	    this.x += this.xSpdPerp1;
	    this.y += this.ySpdPerp1;
        this.zombieOverlap();
      }if(this.stopCounter > 0){
          this.stopCounter += 1;
      }if(this.stopCounter > 10){
        this.stopCounter = 0;
      }
    }
    movePerp2(hero){
      if(((this.y + this.ySpdPerp2) > 45) && ((this.y + this.ySpdPerp2) < height-45) && this.stopCounter === 0){
        this.isMoving = true;
	    this.x += this.xSpdPerp2;
	    this.y += this.ySpdPerp2;
        this.zombieOverlap();
      }if(this.stopCounter > 0){
          this.stopCounter += 1;
      }if(this.stopCounter > 10){
        this.stopCounter = 0;
      }
    }
  moveBack(hero){
      if(((this.y - (this.ySpd)) > 45) && ((this.y - (this.ySpd)) < height-45)){
        this.stopCounter = 1;
        this.movedBack = true;
        this.isMoving = true;
//	    this.x -= this.xSpd * 8;
//	    this.y -= this.ySpd * 8;
        this.zombieOverlap();
        // if(int(random(0, 2)) === 0){
        //   this.movePerp2(hero, 10)
        // }else{
        //   this.movePerp1(hero, 10)
        // }
//        this.zombieOverlap();
      }
    }
	
	outOfBounds(){
		return(this.x > width-36 || this.x < 36 || this.y > height * 1.5 || this.y < 36);
	}
	
	myX(){
		return this.x;
	}
	
	myY(){
		return this.y;
	}
	
	myR(){
		return this.r;
	}
  zombieOverlap(){
    for (var i = 0; i < targetBalloons.length; i++){
        var d = dist(this.x, this.y, targetBalloons[i].x, targetBalloons[i].y);
        if(d < 36 && this.x !== targetBalloons[i].x && this.y !== targetBalloons[i].x){
          // push();
          // angleMode(DEGREES);
          // this.collisionAngle = atan2(this.y - targetBalloons[i].y, this.x - targetBalloons[i].x)
          // angleMode(RADIANS);
          // pop();
          // targetBalloons[i].moveBack(hero);
          return true;
        }else{
          this.movedBack = false;
          return false;
        }
      }
  }
  
  collision(hero){
      if((collideRectCircle(0, 0, 1000, 50, this.x, this.y, this.r)) || (collideRectCircle(0, 950, 1000, 50, this.x, this.y, this.r))){
        return true;
      }
    return false;
  }
  
  collision1(hero){
    for (var i = 0; i < hero.barriers.length; i++){
      if((collideRectCircle(hero.barriers[i].x - 25, hero.barriers[i].y - 25, hero.barriers[i].w, hero.barriers[i].h, this.x, this.y, this.r))){
        return false;
      }
      if((collideRectCircle(hero.barriers[i].x - 25, hero.barriers[i].y -25, hero.barriers[i].w, hero.barriers[i].h, this.x + this.xSpd, this.y + this.ySpd, this.r))){
        hero.barriers[i].health -= 1;
        if(hero.barriers[i].health < 1){
          hero.barriers.splice(i,1);
        }
        return true;
      }
    } 
    
    return false;
  }
  
  collision2(hero){
    for (var i = 0; i < hero.barriers.length; i++){
      if((collideRectCircle(hero.barriers[i].x - 25, hero.barriers[i].y - 25, hero.barriers[i].w, hero.barriers[i].h, this.x, this.y, this.r))){
        return false;
      }
      if((collideRectCircle(hero.barriers[i].x - 25, hero.barriers[i].y -25, hero.barriers[i].w, hero.barriers[i].h, this.x + this.xSpdPerp1, this.y + this.ySpdPerp1, this.r))){
        hero.barriers[i].health -= 1;
        if(hero.barriers[i].health < 1){
          hero.barriers.splice(i,1);
        }
        return true;
      }
    } 
    return false;
  }
  
  collision3(hero){
    for (var i = 0; i < hero.barriers.length; i++){        
      if((collideRectCircle(hero.barriers[i].x - 25, hero.barriers[i].y - 25, hero.barriers[i].w, hero.barriers[i].h, this.x, this.y, this.r))){
        return false;
      }
      if((collideRectCircle(hero.barriers[i].x - 25, hero.barriers[i].y - 25, hero.barriers[i].w, hero.barriers[i].h, this.x + this.xSpdPerp2, this.y + this.ySpdPerp2, this.r))){
        hero.barriers[i].health -= 1;
        if(hero.barriers[i].health < 1){
          hero.barriers.splice(i,1);
        }
        return true;
      }
    } 
    return false;
  }	
  
}
