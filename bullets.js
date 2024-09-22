class bullet{
	constructor(x, y, xSpd, ySpd, hero){
	  this.x = x;
	  this.y = y;
	  this.xSpd = 12*xSpd;
	  this.ySpd = 12*ySpd;
      this.xOrigin = x;
      this.yOrigin = y;
      this.distanceCovered = 0;
      this.show = true;
      this.barrelx = 0;
      this.barrely = 0;
      this.barrelarea = 175;
      this.random = random(0, 100);
/**      this.x = ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x;
      this.y = ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y;**/
	}
	
	display(){
      push()
		stroke(0);
		fill(0);
		ellipse(this.x, this.y, 2.5);
		pop();
	}
	
	update(){
	  this.x += this.xSpd;
	  this.y += this.ySpd;
	  this.xSpd *= 0.994;
	  this.ySpd *= 0.994;
      this.distanceCovered = sqrt((sq(this.x - this.xOrigin)) + (sq(this.y - this.yOrigin)));
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	hitScan(damage){
		for (var i = 0; i < targetBalloons.length; i++){
			var collideOrNot = collideCircleCircle(this.x, this.y, 5, targetBalloons[i].myX(), targetBalloons[i].myY(), targetBalloons[i].myR())
			if (collideOrNot){
              targetBalloons[i].moveBack(hero);
              this.show = false;
              targetBalloons[i].health -= damage;
              if(targetBalloons[i].health <= 0){
                randomDrop(targetBalloons[i].x, targetBalloons[i].y);
				targetBalloons.splice(i,1);
				score += 1;
                return true;
              }
			}
		}
		return false;
	}
  hitScanBarrel(){
		for (var i = 0; i < hero.barriers.length; i++){
          if(hero.barriers[i].type === "placedBarrel" && this.show === true){
			var collideOrNot = collideCircleCircle(this.x, this.y, 5, hero.barriers[i].x, hero.barriers[i].y, hero.barriers[i].w)
			if (collideOrNot){
              this.show = false;
              ellipse(hero.barriers[i].x, hero.barriers[i].y, hero.barriers[i].area);
      for(var j = 0; j < targetBalloons.length; j++){
        if(collideCircleCircle(hero.barriers[i].x, hero.barriers[i].y, hero.barriers[i].area, targetBalloons[j].x, targetBalloons[j].y, targetBalloons[j].r)){
          barrelKills.push(j);
//          targetBalloons.splice(j,1);
        }
      }

      this.barrelx = hero.barriers[i].x;
      this.barrely = hero.barriers[i].y;
      this.barrelarea = hero.barriers[i].area;
      barrelsToSplice.push(hero.barriers[i]);
      hero.barriers.splice(i,1);
      for(var j = 0; j < barrelsToExplode.length; j++){
        if(i < barrelsToExplode[j]){
          barrelsToExplode[j] -= 1;
        }
      }
      for(var j = 0; j < hero.barriers.length; j++){
        
        // console.log("barrel");
        // console.log(hero.barriers[j].x);
        // console.log(hero.barriers[j].y);
        // console.log(hero.barriers[j].w);
        // console.log(barrelsToSplice[0].x);
        // console.log(barrelsToSplice[0].y);
        // console.log(barrelsToSplice[0].area);
        // console.log(collideCircleCircle(hero.barriers[j].x, hero.barriers[j].y, hero.barriers[j].w, barrelsToSplice[0].x, barrelsToSplice[0].y, barrelsToSplice[0].area));
        // console.log(hero.barriers[j].type);
        if(collideCircleCircle(hero.barriers[j].x, hero.barriers[j].y, hero.barriers[j].w, barrelsToSplice[0].x, barrelsToSplice[0].y, barrelsToSplice[0].area) && (hero.barriers[j].type === "placedBarrel")){
          
          // console.log("in")
          // console.log(j)
          barrelsToExplode.push(str(j));
//          console.log(barrelsToExplode);
          
        }
      }
      for(var j = 0; j < barrelsToExplode.length; j++){
        if(barrelsToExplode.includes(i)){
          barrelsToExplode.splice(i, 1);
        }
      }
      
      barrelKills = barrelKills.reverse();
      for(var j = 0; j < barrelKills.length; j++){
        targetBalloons[barrelKills[j]].health -= 100000;
        if(targetBalloons[barrelKills[j]].health <= 0){
          randomDrop(targetBalloons[barrelKills[j]].x, targetBalloons[barrelKills[j]].y);
		  targetBalloons.splice(barrelKills[j],1);
		  score += 1;
        }
        if(targetTimer === zombies && (targetBalloons.length === 0)){
            zombieRound += 1;
            targetTimer = 0;
            zombies += 3;
            nextRound = true;
            morePerks(hero);
            let newBalloon = new balloon(hero, health);
	        targetBalloons.push(newBalloon);
          }
      }
      barrelKills = [];
      barrelsToSplice = [];
      barrelsToExplode = barrelsToExplode.reverse();
//              console.log(barrelsToExplode);
//              barrelsToExplode = [];
              return true;
              
			}
		}
          
      }
    return false;
	}
  
  vertex(hero){
    this.xRotated = ((hero.x + hero.w / 2) - hero.x) * cos(hero.angle) - ((hero.y + hero.h / 2) - hero.y) * sin(hero.angle) + hero.x;
    this.yRotated = ((hero.x + hero.w / 2) - hero.x) * sin(hero.angle) - ((hero.y + hero.h / 2) - hero.y) * cos(hero.angle) + hero.y;
  }
}