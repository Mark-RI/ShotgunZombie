let bulletsFired = [];
let barrelsToExplode = [];
let barrelsToExplode2 = [];
let turretBulletsFired = [];
let barrelsToSplice = [];
let granades = [];
//let balloonSpawnMultiplier = 2;
let balloonSizeMultiplier = 3;
let targetBalloons = [];
let score = 0;
let targetTimer = 1;
let zombieRound = 1;
let zombies = 6;
let nextRound = true;
let granadeKills = [];
let barrelKills = [];
let health = 20;
let end = 0;
let dropTime = 1750;
let counter = 0;
let healthCoolDown = 0;
let healthIncrement = 0;
let randomN = 0;
let displayFloatText = false;
let drops = [] //"Barrel", "Barrier", "Turret", "Shotgun", "Granade", "Rifle"];
let picked = ["DesertEagle"];
let yDisplacement = 0;
let textCounter = 0;
let damage = 5;
let menu = 0;
let shootingAnimation = [];
let floatTextList = [];
let barrelArea = 175;
let homeZombies = 0;
let totalZombies = 10;
let displayZombies = [];
let overStart = false;
let overInst = false;
let overExit = false;
let overControl1 = false;
let overControl2 = false;
let control1 = true;
let control2 = false;
let changeDir = true;
let changeDirCounter = 0;
let granadeCounter = 0;
let overControl12 = false;
let overControl22 = false;
let isdead = false;

let text1 = 'START';

let m = 0.1987;
let c = 88.5;
let m2 = -5.119;
let c2 = 2150;


function preload() {
  zombieMove1 = loadImage('skeleton-move_0.png');
  zombieMove2 = loadImage('skeleton-move_1.png');
  zombieMove3 = loadImage('skeleton-move_2.png');
  zombieMove4 = loadImage('skeleton-move_3.png');
  zombieMove5 = loadImage('skeleton-move_4.png');
  zombieMove6 = loadImage('skeleton-move_5.png');
  zombieMove7 = loadImage('skeleton-move_6.png');
  zombieMove8 = loadImage('skeleton-move_7.png');
  zombieMove9 = loadImage('skeleton-move_8.png');
  zombieMove10 = loadImage('skeleton-move_9.png');
  zombieMove11 = loadImage('skeleton-move_10.png');
  zombieMove12 = loadImage('skeleton-move_11.png');
  zombieMove13 = loadImage('skeleton-move_12.png');
  zombieMove14 = loadImage('skeleton-move_13.png');
  zombieMove15 = loadImage('skeleton-move_14.png');
  zombieMove16 = loadImage('skeleton-move_15.png');
  zombie_idle = loadImage('skeleton-move_16.png');
  zombieAttack1 = loadImage('skeleton-attack_0.png');
  zombieAttack2 = loadImage('skeleton-attack_1.png');
  zombieAttack3 = loadImage('skeleton-attack_2.png');
  zombieAttack4 = loadImage('skeleton-attack_3.png');
  zombieAttack5 = loadImage('skeleton-attack_4.png');
  zombieAttack6 = loadImage('skeleton-attack_5.png');
  zombieAttack7 = loadImage('skeleton-attack_6.png');
  zombieAttack8 = loadImage('skeleton-attack_7.png');
  zombieAttack9 = loadImage('skeleton-attack_8.png');
  shoot1 = loadImage('survivor-shoot_handgun_1.png');
  shoot2 = loadImage('survivor-shoot_handgun_2.png');
  floorback = loadImage('floor2.jpg');
  hero_idle = loadImage('survivor-shoot_handgun_0.png');
  shotgun_idle = loadImage('survivor-shoot_shotgun_0.png');
  shotgunshoot1 = loadImage('survivor-shoot_shotgun_1.png');
  shotgunshoot2 = loadImage('survivor-shoot_shotgun_2.png');
  rifle_idle = loadImage('survivor-shoot_rifle_0.png');
  rifleshoot1 = loadImage('survivor-shoot_rifle_1.png');
  rifleshoot2 = loadImage('survivor-shoot_rifle_2.png');
  drop = loadImage('drop.png');
  idle = loadImage('idle.png');
  barrelplaced = loadImage('barrelplaced.png');
  barrierplaced = loadImage('barrierplaced.png');
  granade_throw_1 = loadImage('granade_throw_1.png');
  granade_throw_2 = loadImage('granade_throw_2.png');
  granade_throw_3 = loadImage('granade_throw_3.png');
  granade_throw_4 = loadImage('granade_throw_4.png');
  granade_throw_5 = loadImage('granade_throw_5.png');
  granade_throw_6 = loadImage('granade_throw_6.png');
  granade_throw_7 = loadImage('granade_throw_7.png');
  granade_throw_8 = loadImage('granade_throw_8.png');
  wallh = loadImage('wallh.png');
  wallv = loadImage('wallv.png');
  turretbarrel = loadImage('turretbarrel.png');
  arrow = loadImage('arrow.png');
  mouse = loadImage('mouse.png');
  wasd = loadImage('wasd.png');
  space = loadImage('space.png');
  key0 = loadImage('0.png');
  key9 = loadImage('9.png');
  keyf = loadImage('f.png');
  keyx = loadImage('x.png');
  keyz = loadImage('z.png');
  logo = loadImage('logo.png');
}

function setup() {
  createCanvas(1000, 600)
  noFill()
  hero = new Character();
  Retry = createButton('retry');
  Retry.hide();
  mainMenu = createButton('main menu');
  mainMenu.hide();
  let newBalloon = new balloon(hero, health);
  targetBalloons.push(newBalloon);
  shootAnimation = [shoot1, shoot2];
  hero.weapons.push(new DesertEagle(hero));
  displayZombies.push(new displayZombie(hero, health, 75));
  displayZombies.push(new displayZombie(hero, health, 140));
  displayZombies.push(new displayZombie(hero, health, 205));
  displayZombies.push(new displayZombie(hero, health, 270));
  displayZombies.push(new displayZombie(hero, health, 335));
  displayZombies.push(new displayZombie(hero, health, 400));
  displayZombies.push(new displayZombie(hero, health, 465));
  displayZombies.push(new displayZombie(hero, health, 530));
  hero.barriers.push((new placedBarrier(hero, 200, 200)));
  hero.barriers.push((new placedBarrier(hero, 200, 250)));
  hero.barriers.push((new placedBarrier(hero, 200, 300)));
  hero.barriers.push((new placedBarrier(hero, 200, 350)));

  hero.barriers.push((new placedBarrier(hero, 800, 200)));
  hero.barriers.push((new placedBarrier(hero, 800, 250)));
  hero.barriers.push((new placedBarrier(hero, 800, 300)));
  hero.barriers.push((new placedBarrier(hero, 800, 350)));

  hero.barriers.push((new placedBarrel(hero, 100, 200, 175)));
  hero.barriers.push((new placedBarrel(hero, 900, 200, 175)));
  hero.barriers.push((new placedBarrel(hero, 100, 400, 175)));
  hero.barriers.push((new placedBarrel(hero, 900, 400, 175)));

  hero.barriers.push((new placedTurret(hero, 500, 100)));
  hero.barriers.push((new placedTurret(hero, 500, 500)));
}

function draw() {

  push();

  background(235, 220, 199)
  image(floorback, 250, 0, 500, 600);
  image(wallh, 0, -68, 200, 100);
  image(wallh, 200, -68, 200, 100);
  image(wallh, 400, -68, 200, 100);
  image(wallh, 600, -68, 200, 100);
  image(wallh, 800, -68, 200, 100);
  image(wallh, 0, 550, 200, 100);
  image(wallh, 200, 550, 200, 100);
  image(wallh, 400, 550, 200, 100);
  image(wallh, 600, 550, 200, 100);
  image(wallh, 800, 550, 200, 100);
  for (var i = 0; i < displayZombies.length; i++) {
    displayZombies[i].display();
    displayZombies[i].update();
    if (displayZombies[i].x > 1050) {
      displayZombies.push(new displayZombie(hero, health, displayZombies[i].y));
      displayZombies.splice(i, 1);
    }
  }
  push();
  translate(-5, 87.5);
  rotate(PI / 16);
  fill(192, 192, 192);
  if (overStart) {
    scale(1.1);
  }
  rect(0, 0, 400, 75);
  textSize(50)
  fill(255);

  textStyle(BOLD);
  if (menu === 0) {
    text1 = 'START';
  } else if (menu === 4) {
    text1 = 'UNPAUSE';
  }
  text(text1, 30, 55);
  pop();

  push();
  translate(-5, 187.5);
  rotate(PI / 16);
  fill(169, 169, 169);
  if (overInst) {
    scale(1.1);
  }
  rect(0, 0, 400, 75);
  textSize(50)
  fill(255);
  textStyle(BOLD);
  text('INSTRUCTIONS', 20, 55);
  pop();

  push();
  translate(-5, 287.5);
  rotate(PI / 16);
  fill(128, 128, 128);
  if (overExit) {
    scale(1.1);
  }

  if (menu !== 0) {
    rect(0, 0, 400, 75);
    textSize(50)
    fill(255);
    textStyle(BOLD);
    text('EXIT', 20, 55);
    pop();
  }

  textSize(50)
  fill(255);
  textStyle(BOLD);
  //  text('START', 70, 106);
  //  text('EXIT', 94, 406);
  textSize(26);
  //  text('INSTRUCTIONS', 52, 248);
  pop();

  if (menu === 0) {
    push();
    noStroke();
    if (overControl12 || control1) {
      fill(0, 0, 0, 100);
    } else {
      noFill();
    }
    rect(10, 360, 488, 180, 20);
    if (overControl22 || control2) {
      fill(0, 0, 0, 100);
    } else {
      noFill();
    }
    rect(502, 360, 488, 180, 20);
    textSize(36)
    fill(50, 50, 50);
    textStyle(BOLD);
    text('CONTROLS', 10, 350);
    textSize(25);
    fill(50, 50, 50);
    //logo
    image(logo, 475, 28, 440, 330);
    text('PLACE BARRIERS...', 20, 432.5);
    image(space, 30, 440, 200, 52);


    //madrevision
    push();
    textSize(30)
    textStyle(BOLD);
    text('MADREVISION.COM', 10, 65);
    pop();

    text('MOVE', 260, 407.5);
    image(wasd, 240, 415, 130, 95);

    text('AIM/SHOOT', 350, 392.5);
    image(mouse, 375, 400, 98, 131);

    text('MOVE/AIM', 843, 402.5);
    image(arrow, 840, 410, 130, 95);

    text('SHOOT/PLACE BARRIERS...', 518, 442.5);
    image(space, 590, 450, 200, 52);

    //     text('SELECT WEAPON', 420, 65);
    //     image(key0, 467, 68, 43, 43);
    //     push();
    //     fill(98, 101, 103);
    //     rect(517, 83, 25, 8);
    //     pop();
    //     image(key9, 549, 68, 43, 43);

    //     text('NEXT/PREVIOUS WEAPON', 660, 65);
    //     image(keyf, 725, 68, 43, 43);
    //     image(keyz, 820, 68, 43, 43);
    //     image(keyx, 870, 68, 43, 43);
    // /**    text('Select weapons 0-9', 500, 75);
    //     text('Aim with mouse', 530, 125);
    //     text('Left click to shoot', 515, 175);
    //     text('Place barrles, barriers', 480, 225);
    //     text('and turrets PRESS SPACE', 445, 275);
    //     text('Use WASD to move', 500, 325);**/
    pop();
  }
  if ((mouseY >= (mouseX * m) + c) && (mouseY <= (mouseX * m) + (c * 1.9)) && (mouseY <= (mouseX * (m2)) + (c2))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
    //      menu = 1;
    overStart = true;
  } else {
    overStart = false;
  }

  if ((mouseY <= (mouseX * m) + (c * 3)) && (mouseY >= (mouseX * m) + (c * 2.15)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.05))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
    overInst = true;
  } else {
    overInst = false;
  }

  if ((mouseY <= (mouseX * m) + (c * 4.15)) && (mouseY >= (mouseX * m) + (c * 3.25)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.1))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
    overExit = true;
  } else {
    overExit = false;
  }

  if ((mouseY >= 140) && (mouseY <= 320) && (mouseX >= 415) && (mouseX <= 990)) {
    overControl1 = true;
  } else {
    overControl1 = false;
  }

  if ((mouseY >= 360) && (mouseY <= 540) && (mouseX >= 415) && (mouseX <= 990)) {
    overControl2 = true;
  } else {
    overControl2 = false;
  }



  if ((mouseY >= 360) && (mouseY <= 540) && (mouseX >= 10) && (mouseX <= 498)) {
    overControl12 = true;
  } else {
    overControl12 = false;
  }

  if ((mouseY >= 360) && (mouseY <= 540) && (mouseX >= 502) && (mouseX <= 990)) {
    overControl22 = true;
  } else {
    overControl22 = false;
  }


  if (menu === 2 || menu === 4) {
    push();
    noStroke();
    if (overControl1 || control1) {
      fill(0, 0, 0, 100);
    } else {
      noFill();
    }
    rect(415, 140, 575, 180, 20);
    if (overControl2 || control2) {
      fill(0, 0, 0, 100);
    } else {
      noFill();
    }
    rect(415, 360, 575, 180, 20);
    textSize(36)
    fill(50, 50, 50);
    textStyle(BOLD);
    text('CHOOSE CONTROLS', 10, 65);
    textSize(25);
    fill(50, 50, 50);
    text('PLACE BARRIERS...', 427, 212.5);
    image(space, 450, 220, 200, 52);

    text('MOVE', 700, 192.5);
    image(wasd, 675, 200, 130, 95);

    text('AIM/SHOOT', 830, 172.5);
    image(mouse, 850, 180, 98, 131);

    text('MOVE/AIM', 803, 402.5);
    image(arrow, 800, 410, 130, 95);

    text('SHOOT/PLACE BARRIERS...', 458, 442.5);
    image(space, 530, 450, 200, 52);

    text('SELECT WEAPON', 420, 65);
    image(key0, 467, 68, 43, 43);
    push();
    fill(98, 101, 103);
    rect(517, 83, 25, 8);
    pop();
    image(key9, 549, 68, 43, 43);

    text('NEXT/PREVIOUS WEAPON', 660, 65);
    image(keyf, 725, 68, 43, 43);
    image(keyz, 820, 68, 43, 43);
    image(keyx, 870, 68, 43, 43);
    /**    text('Select weapons 0-9', 500, 75);
        text('Aim with mouse', 530, 125);
        text('Left click to shoot', 515, 175);
        text('Place barrles, barriers', 480, 225);
        text('and turrets PRESS SPACE', 445, 275);
        text('Use WASD to move', 500, 325);**/
    pop();
  }

  /**  line(-5, 87.5, 385, 165);
    line(0, 177.5, 400, 256.48);
    line(0, 2150, 420, 0);**/

  if (menu === 1) {
    background(235, 220, 199)
    image(floorback, 250, 0, 500, 600);
    image(wallh, 0, -68, 200, 100);
    image(wallh, 200, -68, 200, 100);
    image(wallh, 400, -68, 200, 100);
    image(wallh, 600, -68, 200, 100);
    image(wallh, 800, -68, 200, 100);

    for (var i = 0; i < hero.pickups.length; i++) {
      if (hero.pickups[i].canPickUp === true) {
        if (picked.includes(hero.pickups[i].type)) {
          for (var j = 0; j < hero.weapons.length; j++) {
            if (hero.pickups[i].type === hero.weapons[j].type) {
              hero.weapons[j].current = hero.weapons[j].ammo;
              floatTextList.push(new FloatText(hero, hero.weapons[j].type))
            }
          }
          hero.pickups[i].canPickUp = false;
          hero.pickups[i].isPickedUp = true;
          hero.pickups[i].x = 0;
          hero.pickups[i].y = -2.5;
          hero.pickups.splice([i], 1);
          break;
        } else {
          picked.push(hero.pickups[i].type);
          hero.weapons.push(hero.pickups[i]);
          hero.weapons[hero.weapons.length - 1].current = hero.weapons[hero.weapons.length - 1].ammo;
          hero.pickups[i].canPickUp = false;
          hero.pickups[i].isPickedUp = true;
          hero.pickups[i].x = 0;
          hero.pickups[i].y = -2.5;
          hero.pickups.splice([i], 1);
        }
      }
    }

    for (var i = 0; i < hero.barriers.length; i++) {
      hero.barriers[i].show();
      if (hero.barriers[i].type === "placedTurret") {
        push()
        hero.barriers[i].showHealthBar(hero);

        if (control2) {
          hero.turretAngle = atan2(targetBalloons[0].y - hero.barriers[i].y, targetBalloons[0].x - hero.barriers[i].x)
        } else {
          hero.turretAngle = atan2(mouseY - hero.barriers[i].y, mouseX - hero.barriers[i].x)
        }
        translate(hero.barriers[i].x, hero.barriers[i].y)
        rotate(hero.turretAngle)
        fill(0)
        hero.barriers[i].showBarrel(hero);
        pop()
      }
      if (hero.barriers[i].type === "placedTurret" && ((hero.barriers[i].turretBulletsFired.length === 0) || (hero.barriers[i].turretBulletsFired[(hero.barriers[i].turretBulletsFired.length - 1)].distanceCovered > 400))) {

        let mouseXalt = mouseX - hero.barriers[i].x;
        let mouseYalt = mouseY - hero.barriers[i].y;
        let mouseDir = createVector(mouseXalt, mouseYalt);
        mouseDir.normalize();

        if (control2) {
          mouseXalt = targetBalloons[0].x - hero.barriers[i].x;
          mouseYalt = targetBalloons[0].y - hero.barriers[i].y;
          mouseDir = createVector(mouseXalt, mouseYalt);
          mouseDir.normalize();
        }

        if (targetBalloons.length !== 0) {
          oneBullet = new bullet(hero.barriers[i].x, hero.barriers[i].y, mouseDir.x, mouseDir.y, hero);

          hero.barriers[i].turretBulletsFired.push(oneBullet);
        }
      }
      if (hero.barriers[i].health < 1) {
        hero.barriers.splice(i, 1);
      }
    }

    if (mouseIsPressed && control1 && ((bulletsFired.length === 0) || (bulletsFired[(bulletsFired.length - 1)].distanceCovered > hero.weapons[hero.weapon_number].fireIntervalRange)) && (hero.weapons[hero.weapon_number].type === "Shotgun" || hero.weapons[hero.weapon_number].type === "DesertEagle" || hero.weapons[hero.weapon_number].type === "Rifle") && (hero.weapons[hero.weapon_number].type === "DesertEagle" || hero.weapons[hero.weapon_number].current > 0)) {

      hero.weapons[hero.weapon_number].current -= 1;
      if (hero.weapons[hero.weapon_number].type === "Shotgun") {
        let mouseVector = getMouseVector(hero.x, hero.y);
        shotgunBullets(mouseVector);
        hero.weapons[hero.weapon_number].isShooting = true;
      } else {

        let mouseVector = getMouseVector(hero.x, hero.y);
        oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
        bulletsFired.push(oneBullet);
        hero.weapons[hero.weapon_number].isShooting = true;
      }
    }

    if (mouseIsPressed && control1 && hero.weapons[hero.weapon_number].type === "Granade" && ((granades.length === 0) || (granades[(granades.length - 1)]).count > 75) && (hero.weapons[hero.weapon_number].current > 0)) {
      //    console.log(hero.weapons[hero.weapon_number].current);
      hero.weapons[hero.weapon_number].current -= 1;
      let mouseVector = getMouseVector(hero.x, hero.y);
      throwngranade = new thrownGranade(mouseX, mouseY, mouseVector.x, mouseVector.y, hero);
      hero.weapons[hero.weapon_number].isShooting = true;
      granades.push(throwngranade);

    }

    for (var i = 0; i < hero.pickups.length; i++) {
      if (hero.pickups[i].isPickedUp === false) {
        hero.pickups[i].show();
      }
    }
    if (control1) {
      if (keyIsDown(87)) {
        if (((hero.y - hero.vel) > 45) && (hero.collisionUp() === false)) {
          hero.move_up();
        }
      }
      if (keyIsDown(83)) {
        if (((hero.y + hero.vel) < (height - 45)) && (hero.collisionDown() === false)) {
          hero.move_down();
        }
      }
      if (keyIsDown(68)) {
        if (((hero.x + hero.vel) < (width - 36)) && (hero.collisionRight() === false)) {
          hero.move_right();
        }
      }
      if (keyIsDown(65)) {
        if (((hero.x - hero.vel) > 36) && (hero.collisionLeft() === false)) {
          hero.move_left();
        }
      }
    } else if (control2) {
      if (changeDir === false) {
        changeDirCounter += 1;
      }
      if (changeDirCounter / 3 === int(changeDirCounter / 3)) {
        changeDir = true;
      }
      if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
        hero.angle = PI / 4 * 3;
        hero.xdir = -1;
        hero.ydir = 1;
        if (((hero.x - hero.vel) > 36) || ((hero.y + hero.vel) < (height - 45)) && (hero.collisionLeft() === false) || (hero.collisionDown() === false)) {
          if (hero.collisionLeft() === false && ((hero.x - hero.vel) > 36)) {
            hero.move_left();
          }
          if (hero.collisionDown() === false && ((hero.y + hero.vel) < (height - 45))) {
            hero.move_down();
          }
          changeDirCounter = 0;
          changeDir = false;
        }
      } else if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
        hero.angle = PI / 4 * 5;
        hero.xdir = -1;
        hero.ydir = -1;
        if (((hero.x - hero.vel) > 36) || ((hero.y - hero.vel) > 45) && (hero.collisionLeft() === false) || (hero.collisionUp() === false)) {
          if (hero.collisionLeft() === false && ((hero.x - hero.vel) > 36)) {
            hero.move_left();
          }
          if (hero.collisionUp() === false && ((hero.y - hero.vel) > 45)) {
            hero.move_up();
          }

          changeDirCounter = 0;
          changeDir = false;
        }
      } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
        hero.angle = PI / 4;
        hero.xdir = 1;
        hero.ydir = 1;
        if (((hero.x + hero.vel) < (width - 36)) || ((hero.y + hero.vel) < (height - 45)) && (hero.collisionRight() === false) || (hero.collisionDown() === false)) {
          if (hero.collisionRight() === false && ((hero.x + hero.vel) < (width - 36))) {
            hero.move_right();
          }
          if (hero.collisionDown() === false && ((hero.y + hero.vel) < (height - 45))) {
            hero.move_down();
          }

          changeDirCounter = 0;
          changeDir = false;
        }
      } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
        hero.angle = PI / 4 * 7;
        hero.xdir = 1;
        hero.ydir = -1;
        if (((hero.x + hero.vel) < (width - 36)) || ((hero.y - hero.vel) > 45) && (hero.collisionRight() === false) || (hero.collisionUp() === false)) {
          if (hero.collisionRight() === false && ((hero.x + hero.vel) < (width - 36))) {
            hero.move_right();
          }
          if (hero.collisionUp() === false && ((hero.y - hero.vel) > 45)) {
            hero.move_up();
          }

          changeDirCounter = 0;
          changeDir = false;
        }
      } else if (keyIsDown(UP_ARROW) && changeDir) {
        hero.angle = PI / 4 * 6;
        hero.ydir = -1;
        hero.xdir = 0;
        if (((hero.y - hero.vel) > 45) && (hero.collisionUp() === false)) {
          hero.move_up();

        }
      } else if (keyIsDown(DOWN_ARROW) && changeDir) {
        hero.angle = PI / 4 * 2;
        if (((hero.y + hero.vel) < (height - 45)) && (hero.collisionDown() === false)) {
          hero.move_down();
          hero.ydir = 1;
          hero.xdir = 0;
        }
      } else if (keyIsDown(RIGHT_ARROW) && changeDir) {
        hero.angle = 0;
        hero.xdir = 1;
        hero.ydir = 0;
        if (((hero.x + hero.vel) < (width - 36)) && (hero.collisionRight() === false)) {
          hero.move_right();

        }
      } else if (keyIsDown(LEFT_ARROW) && changeDir) {
        hero.angle = PI;
        hero.xdir = -1;
        hero.ydir = 0;
        if (((hero.x - hero.vel) > 36) && (hero.collisionLeft() === false)) {
          hero.move_left();

        }
      }
      if (keyIsDown(32) && ((bulletsFired.length === 0) || (bulletsFired[(bulletsFired.length - 1)].distanceCovered > hero.weapons[hero.weapon_number].fireIntervalRange)) && (hero.weapons[hero.weapon_number].type === "Shotgun" || hero.weapons[hero.weapon_number].type === "DesertEagle" || hero.weapons[hero.weapon_number].type === "Rifle") && (hero.weapons[hero.weapon_number].type === "DesertEagle" || hero.weapons[hero.weapon_number].current > 0)) {

        hero.weapons[hero.weapon_number].current -= 1;
        if (hero.weapons[hero.weapon_number].type === "Shotgun") {
          //      let mouseVector = getMouseVector(hero.x, hero.y);
          shotgunBulletsSpace();
          hero.weapons[hero.weapon_number].isShooting = true;
        } else {

          //      let mouseVector = getMouseVector(hero.x, hero.y);
          oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
          bulletsFired.push(oneBullet);
          hero.weapons[hero.weapon_number].isShooting = true;
        }
      }
      if (keyIsDown(32) && hero.weapons[hero.weapon_number].type === "Granade" && ((granades.length === 0) || (granades[(granades.length - 1)]).count > 75) && (hero.weapons[hero.weapon_number].current > 0)) {
        granadeCounter += 1;
      }

      /**  if(keyIsDown(32) && hero.weapons[hero.weapon_number].type === "Granade" && ((granades.length === 0) || (granades[(granades.length -1)]).count > 75) && (hero.weapons[hero.weapon_number].current > 0)){
      //    console.log(hero.weapons[hero.weapon_number].current);
          hero.weapons[hero.weapon_number].current -= 1;
            let mouseVector = getMouseVector(hero.x, hero.y);
            throwngranade = new thrownGranade(hero.x + 100, hero.y + 100, hero.xdir, hero.ydir, hero);
            hero.weapons[hero.weapon_number].isShooting = true;
            granades.push(throwngranade);
            
           }**/
    }
    drawHero(hero);

    //----------------------------------------BALLOONS-SPAWN--------------------------------------

    if (targetTimer < zombies && ((targetBalloons.length === 0) || (46 < (targetBalloons[targetBalloons.length - 1].x - targetBalloons[targetBalloons.length - 1].xOrigin)) || (46 < (targetBalloons[targetBalloons.length - 1].xOrigin - targetBalloons[targetBalloons.length - 1].x)))) {
      let newBalloon = new balloon(hero, health);
      targetBalloons.push(newBalloon);
      targetTimer += 1;
      nextRound = false;
    }

    /**  if(nextRound === true){
        nextRound = false;
        for (var i = 0; i < zombies; i++){
    	  let newBalloon = new balloon(hero);
    	  targetBalloons.push(newBalloon);
        }
      }**/

    //-------------------------------------------BULLETS & GRANADE----------------------------------------

    for (var j = 0; j < bulletsFired.length; j++) {
      if (bulletsFired[j].show) {
        bulletsFired[j].display();
      }
      bulletsFired[j].update();
      if (bulletsFired[j].hitScanBarrel() && bulletsFired[j].show) {
        // console.log("collision")
      }
      if (bulletsFired[j].outOfBounds() && bulletsFired[(bulletsFired.length - 1)].distanceCovered > hero.weapons[hero.weapon_number].fireIntervalRange) {
        bulletsFired.splice(j, 1);
      } else if (bulletsFired[j].show && bulletsFired[j].hitScan(damage)) {
        if (targetTimer === zombies && (targetBalloons.length === 0)) {
          zombieRound += 1;
          targetTimer = 0;
          zombies += 3;
          health += 5;
          // console.log(health);
          nextRound = true;
          morePerks(hero);
          let newBalloon = new balloon(hero, health);
          targetBalloons.push(newBalloon);
        }
      }
    }

    // for(var j = 0; j < bulletsFired.length; j++){

    // }

    for (var j = 0; j < hero.barriers.length; j++) {
      if (hero.barriers[j].type === "placedTurret") {
        for (var i = 0; i < hero.barriers[j].turretBulletsFired.length; i++) {
          if (hero.barriers[j].turretBulletsFired[i].show) {
            hero.barriers[j].turretBulletsFired[i].display();
          }
          hero.barriers[j].turretBulletsFired[i].update();

          if (hero.barriers[j].turretBulletsFired[i].outOfBounds() && hero.barriers[j].turretBulletsFired[(hero.barriers[j].turretBulletsFired.length - 1)].distanceCovered > hero.weapons[hero.weapon_number].fireIntervalRange) {
            hero.barriers[j].turretBulletsFired.splice(i, 1);

          } else if (hero.barriers[j].turretBulletsFired[i].show && hero.barriers[j].turretBulletsFired[i].hitScan(damage)) {
            if (targetTimer === zombies && (targetBalloons.length === 0)) {
              zombieRound += 1;
              targetTimer = 0;
              zombies += 3;
              nextRound = true;
              morePerks(hero);
              let newBalloon = new balloon(hero, health);
              targetBalloons.push(newBalloon);
            }
          }
        }
      }
    }



    for (var i = 0; i < granades.length; i++) {
      granades[i].throw();
      granades[i].show();
      if (granades[i].exploded()) {
        ellipse(granades[i].xOrigin, granades[i].yOrigin, granades[i].area);
        for (var j = 0; j < targetBalloons.length; j++) {

          if (collideCircleCircle(granades[i].xOrigin, granades[i].yOrigin, granades[i].area, targetBalloons[j].x, targetBalloons[j].y, targetBalloons[j].r)) {
            granadeKills.push(j);
            //          targetBalloons.splice(j,1);
          }
        }
        for (var j = 0; j < hero.barriers.length; j++) {
          if (hero.barriers[j].type === 'placedBarrel' && collideCircleCircle(granades[i].xOrigin, granades[i].yOrigin, granades[i].area, hero.barriers[j].x, hero.barriers[j].y, hero.barriers[j].w)) {
            barrelsToExplode.push(j);
          }
        }
        granades.splice(i, 1);
        // console.log(granadeKills);
        granadeKills = granadeKills.reverse();
        for (var j = 0; j < granadeKills.length; j++) {
          targetBalloons[i].health -= 10000;
          if (targetBalloons[i].health <= 0) {
            randomDrop(targetBalloons[i].x, targetBalloons[i].y);
            targetBalloons.splice(granadeKills[j], 1);
            score += 1;
          }
          if (targetTimer === zombies && (targetBalloons.length === 0)) {
            zombieRound += 1;
            targetTimer = 0;
            zombies += 3;
            nextRound = true;
            morePerks(hero);
            let newBalloon = new balloon(hero, health);
            targetBalloons.push(newBalloon);
          }
        }
        granadeKills = [];
      }

    }

    //Explode Barrels

    for (var i = 0; i < barrelsToExplode.length; i++) {
      if (hero.barriers[barrelsToExplode[0]] === undefined) {
        //      console.log("hallelulla")
        barrelsToExplode.splice(0, 1);
        break;
      }
      // console.log("START");
      // console.log(barrelsToExplode);
      // console.log("END");
      ellipse(hero.barriers[barrelsToExplode[0]].x, hero.barriers[barrelsToExplode[0]].y, hero.barriers[barrelsToExplode[0]].area);
      for (var j = 0; j < targetBalloons.length; j++) {
        if (collideCircleCircle(hero.barriers[barrelsToExplode[0]].x, hero.barriers[barrelsToExplode[0]].y, hero.barriers[barrelsToExplode[0]].area, targetBalloons[j].x, targetBalloons[j].y, targetBalloons[j].r)) {
          barrelKills.push(j);
          //          targetBalloons.splice(j,1);
        }
      }

      barrelsToSplice.push(hero.barriers[barrelsToExplode[0]]);
      for (var j = 0; j < barrelsToExplode2.length; j++) {
        if (barrelsToExplode[0] < barrelsToExplode2[j]) {
          barrelsToExplode2[j] -= 1;
        }
      }
      hero.barriers.splice(barrelsToExplode[0], 1);
      barrelsToExplode.splice(0, 1);
      for (var j = 0; j < hero.barriers.length; j++) {
        if (collideCircleCircle(hero.barriers[j].x, hero.barriers[j].y, hero.barriers[j].w, barrelsToSplice[0].x, barrelsToSplice[0].y, barrelsToSplice[0].area) && (hero.barriers[j].type === "placedBarrel")) {
          if (barrelsToExplode.includes(str(j))) {} else {
            // console.log(j);
            barrelsToExplode2.push(str(j));
          }

        }
      }
      barrelsToSplice = [];


      //      hero.barriers.splice(i,1);
      barrelKills = barrelKills.reverse();
      for (var j = 0; j < barrelKills.length; j++) {
        targetBalloons[barrelKills[j]].health -= 10000;
        if (targetBalloons[barrelKills[j]].health <= 0) {
          randomDrop(targetBalloons[barrelKills[j]].x, targetBalloons[barrelKills[j]].y);
          targetBalloons.splice(barrelKills[j], 1);
          score += 1;
        }
        if (targetTimer === zombies && (targetBalloons.length === 0)) {
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
    }

    /**  console.log("out");
      console.log(barrelsToExplode2);
      console.log(barrelsToExplode);**/

    barrelsToExplode = barrelsToExplode2;
    // barrelsToExplode = barrelsToExplode2;
    // barrelsToExplode = barrelsToExplode.sort();
    // barrelsToExplode = barrelsToExplode.reverse();
    // barrelsToExplode2 = [];


    for (var j = 0; j < hero.pickups.length; j++) {
      hero.pickups[j].dropTime += 1;
      if (hero.pickups[j].dropTime === dropTime) {
        hero.pickups.splice(j, 1);
      }
    }



    //-------------------------------------------EVIL-BALLOONS----------------------------------------
    for (var i = 0; i < targetBalloons.length; i++) {
      /**      targetBalloons[i].angle = atan2(hero.y - targetBalloons[i].y, hero.x - targetBalloons[i].x);
      //      console.log(targetBalloons[i].angle);
             push()
             translate(300, 300);
             rotate(targetBalloons[i].angle);
            //   fill(0)
              targetBalloons[i].display(hero);
             pop()**/

      push()
      translate(targetBalloons[i].x, targetBalloons[i].y)
      targetBalloons[i].angle = atan2(hero.y - (targetBalloons[i].y), hero.x - (targetBalloons[i].x))
      rotate(targetBalloons[i].angle)
      fill(0)
      targetBalloons[i].display(hero);
      pop()

      for (j = 0; j < targetBalloons.length; j++) {
        targetBalloons[i].update(hero);
        var d = dist(targetBalloons[i].x + targetBalloons[i].xSpd, targetBalloons[i].y + targetBalloons[i].ySpd, targetBalloons[j].x, targetBalloons[j].y);
        if (d < 36) {
          targetBalloons[i].times += 1;
        }
        var dPerp1 = dist(targetBalloons[i].x + targetBalloons[i].xSpdPerp1, targetBalloons[i].y + targetBalloons[i].ySpdPerp1, targetBalloons[j].x, targetBalloons[j].y);
        if (dPerp1 < 36) {
          targetBalloons[i].times2 += 1;
        }
        var dPerp2 = dist(targetBalloons[i].x + targetBalloons[i].xSpdPerp2, targetBalloons[i].y + targetBalloons[i].ySpdPerp2, targetBalloons[j].x, targetBalloons[j].y);
        if (dPerp2 < 36) {
          targetBalloons[i].times3 += 1;
        }
      }
      if ((targetBalloons[i].times <= 1 && (targetBalloons[i].collision1(hero) === false))) {
        targetBalloons[i].move(hero);
        targetBalloons[i].times = 0;
        targetBalloons[i].times2 = 0;
        targetBalloons[i].times3 = 0;
      } else {
        if (targetBalloons[i].times2 <= 1 && (targetBalloons[i].collision2(hero) === false)) {
          targetBalloons[i].movePerp1(hero);
          targetBalloons[i].times = 0;
          targetBalloons[i].times2 = 0;
          targetBalloons[i].times3 = 0;
        } else if (targetBalloons[i].times3 <= 1 && (targetBalloons[i].collision3(hero) === false)) {
          targetBalloons[i].movePerp2(hero);
          targetBalloons[i].times = 0;
          targetBalloons[i].times2 = 0;
          targetBalloons[i].times3 = 0;
        } else {
          targetBalloons[i].times = 0;
          targetBalloons[i].times2 = 0;
          targetBalloons[i].times3 = 0;
        }
      }


      /**		if (targetBalloons[i].outOfBounds()){
            		targetBalloons.splice(i,1);
          	}**/
    }

    /**  for (var i = 0; i < targetBalloons.length; i++){
          for (j = 0; j < targetBalloons.length; j++){
            var d = dist(targetBalloons[i].x, targetBalloons[i].y, targetBalloons[j].x, targetBalloons[j].y);
            if(d < targetBalloons[i].r + targetBalloons[j].r){
              targetBalloons[i].y += 36;
            }
          }
    	}**/

    //    zombieOverlap();

    //	balloonSpawnMultiplier += 0.001;


    for (var pickup = 0; pickup < hero.pickups.length; pickup++) {
      hero.pickups[pickup].pickedUp(hero);
    }
    if (hero.health === 25) {
      hero.colorBHealth = 0;
      hero.colorRHealth = 0;
      hero.colorGHealth = 255;
    } else if (hero.health === 20) {
      hero.colorBHealth = 0;
      hero.colorRHealth = 128;
      hero.colorGHealth = 255;
    } else if (hero.health === 15) {
      hero.colorBHealth = 0;
      hero.colorRHealth = 255;
      hero.colorGHealth = 255;
    } else if (hero.health === 10) {
      hero.colorBHealth = 0;
      hero.colorRHealth = 255;
      hero.colorGHealth = 128;
    } else {
      hero.colorBHealth = 0;
      hero.colorRHealth = 255;
      hero.colorGHealth = 0;
    }

    if (hero.hitScan(damage) && healthCoolDown <= 0) {
      hero.health -= 5;
      hero.healthw -= 7;
      healthCoolDown = 100;
      healthIncrement = 0;
      if (hero.health <= 0) {
        hero.health = 0;
        isdead = true;
        //           push();
        //           fill(20);
        //           rect(200,200,600,200);

        //           textFont('Georgia');
        //           textAlign(CENTER);
        //           textSize(50);
        //           fill(170,20,20);
        //           text("YOU DIED",500,300);

        //           textFont('Helvetica');
        //           textSize(18);
        //           fill(235);
        //           let scoreString = "score: " + score;
        //           text(scoreString, 500, 320);
        //           pop();
        gameOver();
      }

    }

    if (healthCoolDown > 0) {
      healthCoolDown -= 1;
      hero.colorA = (100);
      if (Number.isInteger(healthCoolDown / 12)) {
        hero.colorA = (255);
      }
    }

    if (hero.health < 25 && (hero.hitScan(damage) === false || healthCoolDown > 0)) {
      //    console.log(healthCoolDown);
      healthIncrement += 1;
      if (Number.isInteger(healthIncrement / 350)) {
        hero.health += 5;
        hero.healthw += 7;
        healthIncrement = 0;
      }
    }

    for (var i = 0; i < floatTextList.length; i++) {
      floatTextList[i].floatText();
    }

    if (zombieRound === 2) {
      floatText("Shotgun Press 2");
    }
    if (zombieRound === 4) {
      floatText("Rifle Press 3");
    }
    if (zombieRound === 6) {
      floatText("Barrel Press 4");
    }
    if (zombieRound === 7) {
      floatText("Double Damage");
    }
    if (zombieRound === 8) {
      floatText("Granade Press 5");
    }
    if (zombieRound === 10) {
      floatText("Barrier Press 6");
    }
    if (zombieRound === 11) {
      floatText("Shotgun Fast Fire");
    }
    if (zombieRound === 12) {
      floatText("Turret Press 7");
    }
    if (zombieRound === 13) {
      floatText("Rifle Rapid Fire");
    }
    if (zombieRound === 14) {
      floatText("Shotgun Double Ammo");
    }
    if (zombieRound === 16) {
      floatText("Rifle Double Ammo");
    }
    if (zombieRound === 18) {
      floatText("Bigger Barrel Bang");
    }

    image(wallh, 0, 550, 200, 100);
    image(wallh, 200, 550, 200, 100);
    image(wallh, 400, 550, 200, 100);
    image(wallh, 600, 550, 200, 100);
    image(wallh, 800, 550, 200, 100);

    textFont('Helvetica');
    textSize(22);
    fill(153, 0, 0);
    roundstring = "Round: " + zombieRound;
    text(roundstring, 30, 55);

    if (isdead) {
      push();
      fill(20);
      rect(200, 200, 600, 200);

      textFont('Georgia');
      textAlign(CENTER);
      textSize(50);
      fill(170, 20, 20);
      text("YOU DIED", 500, 300);

      textFont('Helvetica');
      textSize(18);
      fill(235);
      scoreString = "score: " + score;
      text(scoreString, 500, 320);
      pop();
    }
  }
}

function drawHero(hero) {
  if (hero.weapons[hero.weapon_number].type !== "DesertEagle") {
    hero.showWeaponInfo()
  }
  hero.showHealthBar();


  if (control1) {
    push()
    hero.angle = atan2(mouseY - hero.y, mouseX - hero.x)
    translate(hero.x, hero.y)
    rotate(hero.angle)
    imageMode(CENTER);
    fill(0)
    hero.weapons[hero.weapon_number].show(hero);
    hero.show();
    pop()
  } else if (control2) {
    push()
    translate(hero.x, hero.y)
    rotate(hero.angle)
    imageMode(CENTER);
    fill(0)
    hero.weapons[hero.weapon_number].show(hero);
    hero.show();
    pop()
  }
}

/**function getBisectorX(xOrigin, yOrigin, x, y, angle){
  len = (sqrt((sq(x - xOrigin)) + (sq(y - yOrigin)))) / (cos(angle));
  x2 = xOrigin + (len * (cos(angle)));
  return x2;
}

function getBisectorY(xOrigin, yOrigin, x, y, angle){
  len = (sqrt((sq(x - xOrigin)) + (sq(y - yOrigin)))) / (cos(angle));
  y2 = yOrigin + (len * (sin(angle)));
  return y2;
}**/

function shotgunBullets(mouseVector) {
  if ((mouseVector.x > -0.6) && (mouseVector.x < 0.6)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x + 0.1, mouseVector.y, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x - 0.1, mouseVector.y, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((mouseVector.x > -0.8) && (mouseVector.x < -0.6) && (mouseVector.y < 0)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x + 0.1, mouseVector.y - 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x - 0.1, mouseVector.y + 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((mouseVector.x > 0.6) && (mouseVector.x < 0.8) && (mouseVector.y < 0)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x - 0.1, mouseVector.y - 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x + 0.1, mouseVector.y + 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((mouseVector.x > 0.6) && (mouseVector.x < 0.8) && (mouseVector.y > 0)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x - 0.1, mouseVector.y + 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x + 0.1, mouseVector.y - 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((mouseVector.x < -0.6) && (mouseVector.x > -0.8) && (mouseVector.y > 0)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x + 0.1, mouseVector.y + 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x - 0.1, mouseVector.y - 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y + 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, mouseVector.x, mouseVector.y - 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  }
}

function shotgunBulletsSpace() {
  if ((hero.ydir != 0) && (hero.xdir === 0)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir + 0.1, hero.ydir, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir - 0.1, hero.ydir, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((hero.xdir === -1) && (hero.ydir === -1)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir + 0.1, hero.ydir - 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir - 0.1, hero.ydir + 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((hero.xdir === 1) && (hero.ydir === -1)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir - 0.1, hero.ydir - 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir + 0.1, hero.ydir + 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((hero.xdir === 1) && (hero.ydir === 1)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir - 0.1, hero.ydir + 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir + 0.1, hero.ydir - 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else if ((hero.xdir === -1) && (hero.ydir === 1)) {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir + 0.1, hero.ydir + 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir - 0.1, hero.ydir - 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  } else {
    oneBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir, hero);
    twoBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir + 0.1, hero);
    threeBullet = new bullet(((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * cos(hero.angle) - ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * sin(hero.angle) + hero.x, ((hero.x + hero.weapons[hero.weapon_number].xbulletDisplacement) - hero.x) * sin(hero.angle) + ((hero.y + hero.weapons[hero.weapon_number].ybulletDisplacement) - hero.y) * cos(hero.angle) + hero.y, hero.xdir, hero.ydir - 0.1, hero);
    bulletsFired.push(oneBullet);
    bulletsFired.push(twoBullet);
    bulletsFired.push(threeBullet);
  }
}

function keyPressed() {
  // printedValue = keyCode
  // console.log(printedValue);
  if (keyCode === 70) {
    hero.weapon_number += 1;
    hero.switch_weapon();
    granadeCounter = 0;
  }
  if (keyCode === 88) {
    hero.weapon_number += 1;
    hero.switch_weapon();
    granadeCounter = 0;
  }
  if (keyCode === 90) {
    hero.weapon_number -= 1;
    hero.switch_weapon();
    granadeCounter = 0;
  }
  if (keyCode === 80 && menu === 1) {
    // console.log("pause");
    menu = 4;
    granadeCounter = 0;
  } else if (keyCode === 80 && menu === 4) {
    // console.log("unpause");
    menu = 1;
    granadeCounter = 0;
  }
  if ((keyCode === 32) && control1 && ((hero.weapons[hero.weapon_number].type === "Barrier") || (hero.weapons[hero.weapon_number].type === "Turret") || (hero.weapons[hero.weapon_number].type === "Barrel")) && hero.weapons[hero.weapon_number].current > 0) {
    hero.weapons[hero.weapon_number].place();
  } else if ((keyCode === 32) && control2 && ((hero.weapons[hero.weapon_number].type === "Barrier") || (hero.weapons[hero.weapon_number].type === "Turret") || (hero.weapons[hero.weapon_number].type === "Barrel")) && hero.weapons[hero.weapon_number].current > 0) {
    hero.weapons[hero.weapon_number].place();
  }

  //  1 = 49 2 = 50 

  if (keyCode === 49 && hero.weapons.length >= 1) {
    hero.weapon_number = 0;
    granadeCounter = 0;
  }
  if (keyCode === 50 && hero.weapons.length >= 2) {
    hero.weapon_number = 1;
    granadeCounter = 0;
  }
  if (keyCode === 51 && hero.weapons.length >= 3) {
    hero.weapon_number = 2;
    granadeCounter = 0;
  }
  if (keyCode === 52 && hero.weapons.length >= 4) {
    hero.weapon_number = 3;
    granadeCounter = 0;
  }
  if (keyCode === 53 && hero.weapons.length >= 5) {
    hero.weapon_number = 4;
  }
  if (keyCode === 54 && hero.weapons.length >= 6) {
    hero.weapon_number = 5;
    granadeCounter = 0;
  }
  if (keyCode === 55 && hero.weapons.length >= 7) {
    hero.weapon_number = 6;
    granadeCounter = 0;
  }
  if (keyCode === 56 && hero.weapons.length >= 8) {
    hero.weapon_number = 7;
  }
  if (keyCode === 57 && hero.weapons.length >= 9) {
    hero.weapon_number = 8;
  }
  if (keyCode === 48 && hero.weapons.length >= 10) {
    hero.weapon_number = 9;
  }
}

function getMouseVector(originx, originy) {
  let mouseXalt = mouseX - originx;
  let mouseYalt = mouseY - originy;
  let mouseDir = createVector(mouseXalt, mouseYalt);
  mouseDir.normalize();
  return mouseDir;
}

function gameOver() {
  push()

  Retry.show();
  Retry.position(width / 2 - 120, height / 2 + 30);
  Retry.size(100, 30);
  Retry.style('background-color', '#202020');
  Retry.style('color', '#FFFFFF');
  Retry.mouseClicked(reset);

  mainMenu.show();
  mainMenu.position(width / 2 + 20, height / 2 + 30);
  mainMenu.size(100, 30);
  mainMenu.style('background-color', '#202020');
  mainMenu.style('color', '#FFFFFF');
  mainMenu.mouseClicked(mainmenu);

  pop();
  noLoop();

}

function mainmenu() {
  isdead = false;
  Retry.hide();
  mainMenu.hide();
  menu = 0;
  loop();
}

function reset() {
  isdead = false;
  Retry.hide();
  mainMenu.hide();
  bulletsFired = [];
  targetBalloons = [];
  hero.x = 500;
  hero.y = 300;
  //	balloonSpawnMultiplier = 1;
  balloonSizeMultiplier = 3;
  hero.weapon_number = 0;
  hero.weapons.length = 0;
  hero.pickups.length = 0;
  score = 0;
  hero.weapons.push(new DesertEagle(hero));
  shotgun = (new Shotgun(hero));
  hero.pickups.push(shotgun);
  rifle = (new Rifle(hero));
  hero.pickups.push(rifle);
  zombieRound = 1;
  zombies = 6;
  nextRound = true;
  targetTimer = 1;
  let newBalloon = new balloon(hero, health);
  targetBalloons.push(newBalloon);
  barrier = (new Barrier(hero));
  hero.pickups.push(barrier);
  turret = (new Turret(hero));
  hero.pickups.push(turret);
  granade = (new Granade(hero));
  hero.pickups.push(granade);
  hero.barriers = [];
  turretBulletsFired = [];
  granades = [];
  granadeKills = [];
  health = 20;
  hero.health = 25;
  hero.colorR = 255;
  hero.colorG = 255;
  hero.colorB = 255;
  hero.colorBHealth = 0;
  hero.colorRHealth = 0;
  hero.colorGHealth = 255;
  hero.healthw = 35;
  hero.healthh = 5;
  bulletsFired = [];
  barrelsToExplode = [];
  barrelsToExplode2 = [];
  turretBulletsFired = [];
  barrelsToSplice = [];
  barrelArea = 175;
  granadeCounter = 0;
  hero.barriers.push((new placedBarrier(hero, 200, 200)));
  hero.barriers.push((new placedBarrier(hero, 200, 250)));
  hero.barriers.push((new placedBarrier(hero, 200, 300)));
  hero.barriers.push((new placedBarrier(hero, 200, 350)));

  hero.barriers.push((new placedBarrier(hero, 800, 200)));
  hero.barriers.push((new placedBarrier(hero, 800, 250)));
  hero.barriers.push((new placedBarrier(hero, 800, 300)));
  hero.barriers.push((new placedBarrier(hero, 800, 350)));

  hero.barriers.push((new placedBarrel(hero, 100, 200, 175)));
  hero.barriers.push((new placedBarrel(hero, 900, 200, 175)));
  hero.barriers.push((new placedBarrel(hero, 100, 400, 175)));
  hero.barriers.push((new placedBarrel(hero, 900, 400, 175)));

  hero.barriers.push((new placedTurret(hero, 500, 100)));
  hero.barriers.push((new placedTurret(hero, 500, 500)));
  loop();
}

/**function zombieOverlap(){
  for (i = 0; i < targetBalloons.length; i++){
    for (j = 0; j < targetBalloons.length; j++){
      var d = dist(targetBalloons[i].x, targetBalloons[i].y, targetBalloons[j].x, targetBalloons[j].y)
      if(d < 36){
        targetBalloons[i].x -= targetBalloons[i].r / 4;
        targetBalloons[j].x += targetBalloons[j].r / 4;
      }
    }
  }
}

function mousePressed(){
	let mouseVector = getMouseVector();
	oneBullet = new bullet(mouseVector.x, mouseVector.y, hero);
	bulletsFired.push(oneBullet);
      

}**/


function collideCircleCircle2(x, y, d, x2, y2, d2) {
  //2d
  if (sqrt((sq(x - x2)) + (sq(y - y2))) <= (d / 2) + (d2 / 2)) {
    return true;
  }
  return false;
}

function morePerks(hero) {
  if (zombieRound === 2) {
    shotgun = (new Shotgun(hero));
    shotgun.x = 0;
    shotgun.y = -2.5;
    shotgun.isPickedUp = true;
    shotgun.canPickedUp = false;
    picked.push("Shotgun");
    hero.weapons.push(shotgun);
    drops.push("Shotgun");
    displayFloatText = true;
  } else if (zombieRound === 4) {
    rifle = (new Rifle(hero));
    rifle.x = 0;
    rifle.y = -2.5;
    rifle.isPickedUp = true;
    rifle.canPickedUp = false;
    picked.push("Rifle");
    hero.weapons.push(rifle);
    drops.push("Rifle");
    displayFloatText = true;
  } else if (zombieRound === 6) {
    barrel = (new Barrel(hero, 0, -2.5, barrelArea));
    barrel.x = 0;
    barrel.y = -2.5;
    barrel.isPickedUp = true;
    barrel.canPickedUp = false;
    picked.push("Barrel");
    hero.weapons.push(barrel);
    drops.push("Barrel");
    displayFloatText = true;
  } else if (zombieRound === 7) {
    damage += 5;
    displayFloatText = true;
  } else if (zombieRound === 8) {
    granade = (new Granade(hero));
    granade.x = 0;
    granade.y = -2.5;
    granade.isPickedUp = true;
    granade.canPickedUp = false;
    picked.push("Granade");
    hero.weapons.push(granade);
    drops.push("Granade");
    displayFloatText = true;
  } else if (zombieRound === 10) {
    barrier = (new Barrier(hero));
    barrier.x = 0;
    barrier.y = -2.5;
    barrier.isPickedUp = true;
    barrier.canPickedUp = false;
    picked.push("Barrier");
    hero.weapons.push(barrier);
    drops.push("Barrier");
    displayFloatText = true;
  } else if (zombieRound === 11) {
    hero.weapons[1].fireIntervalRange -= 100;
    displayFloatText = true;
  } else if (zombieRound === 12) {
    turret = (new Turret(hero));
    turret.x = 0;
    turret.y = -2.5;
    turret.isPickedUp = true;
    turret.canPickedUp = false;
    picked.push("Turret");
    hero.weapons.push(turret);
    drops.push("Turret");
    displayFloatText = true;
  } else if (zombieRound === 13) {
    hero.weapons[2].fireIntervalRange -= 50;
    displayFloatText = true;
  } else if (zombieRound === 14) {
    hero.weapons[1].ammo = 60;
    displayFloatText = true;
  } else if (zombieRound === 16) {
    hero.weapons[2].ammo = 400;
    displayFloatText = true;
  } else if (zombieRound === 18) {
    barrelArea = 200;
    displayFloatText = true;
  }

}

function randomDrop(x, y) {
  randomN = random(0, 100);
  if (randomN <= 5 || counter === 20) {
    counter = 0;
    randomN = random(0, drops.length);
    randomN = int(randomN);
    if (drops[randomN] === "Barrier") {
      barrier = (new Barrier(hero, x, y));
      hero.pickups.push(barrier);
    } else if (drops[randomN] === "Shotgun") {
      shotgun = (new Shotgun(hero, x, y));
      hero.pickups.push(shotgun);
    } else if (drops[randomN] === "Rifle") {
      rifle = (new Rifle(hero, x, y));
      hero.pickups.push(rifle);
    }
    if (drops[randomN] === "Turret") {
      turret = (new Turret(hero, x, y));
      hero.pickups.push(turret);
    } else if (drops[randomN] === "Granade") {
      granade = (new Granade(hero, x, y));
      hero.pickups.push(granade);

    } else if (drops[randomN] === "Barrel") {
      barrel = (new Barrel(hero, x, y, barrelArea));
      hero.pickups.push(barrel);
    }
  } else {
    counter += 1;
  }
}

function floatText(display) {
  if ((displayFloatText || newWeapon) && textCounter < 125) {
    textCounter += 1;
    push();
    textStyle(BOLD);
    textAlign(CENTER);
    textFont('Helvetica');
    textSize(19);
    fill(0);
    text(display, width / 2, height * 0.9 - yDisplacement);
    pop();
    yDisplacement += 1;

  } else {
    textCounter = 0;
    yDisplacement = 0;
    displayFloatText = false;
    newWeapon = false;
  }
}

function mouseClicked() {
  // translate(-5, 87.5);
  // rotate(PI / 16);
  // fill(192,192,192);
  // rect(0, 0, 400, 75);
  // textSize(50)
  // fill(255);
  // textStyle(BOLD);
  // text('START', 30, 55);
  if (menu === 0) {
    if ((mouseY >= (mouseX * m) + c) && (mouseY <= (mouseX * m) + (c * 1.9)) && (mouseY <= (mouseX * (m2)) + (c2))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      bulletsFired = [];
      targetBalloons = [];
      hero.x = 500;
      hero.y = 300;
      //	balloonSpawnMultiplier = 1;
      balloonSizeMultiplier = 3;
      hero.weapon_number = 0;
      hero.weapons.length = 0;
      hero.pickups.length = 0;
      score = 0;
      hero.weapons.push(new DesertEagle(hero));
      shotgun = (new Shotgun(hero));
      hero.pickups.push(shotgun);
      rifle = (new Rifle(hero));
      hero.pickups.push(rifle);
      zombieRound = 1;
      zombies = 6;
      nextRound = true;
      targetTimer = 1;
      let newBalloon = new balloon(hero, health);
      targetBalloons.push(newBalloon);
      barrier = (new Barrier(hero));
      hero.pickups.push(barrier);
      turret = (new Turret(hero));
      hero.pickups.push(turret);
      granade = (new Granade(hero));
      hero.pickups.push(granade);
      hero.barriers = [];
      turretBulletsFired = [];
      granades = [];
      granadeKills = [];
      health = 20;
      hero.health = 25;
      hero.colorR = 255;
      hero.colorG = 255;
      hero.colorB = 255;
      hero.colorBHealth = 0;
      hero.colorRHealth = 0;
      hero.colorGHealth = 255;
      hero.healthw = 35;
      hero.healthh = 5;
      bulletsFired = [];
      barrelsToExplode = [];
      barrelsToExplode2 = [];
      turretBulletsFired = [];
      barrelsToSplice = [];
      barrelArea = 175;
      granadeCounter = 0;
      hero.barriers.push((new placedBarrier(hero, 200, 200)));
      hero.barriers.push((new placedBarrier(hero, 200, 250)));
      hero.barriers.push((new placedBarrier(hero, 200, 300)));
      hero.barriers.push((new placedBarrier(hero, 200, 350)));

      hero.barriers.push((new placedBarrier(hero, 800, 200)));
      hero.barriers.push((new placedBarrier(hero, 800, 250)));
      hero.barriers.push((new placedBarrier(hero, 800, 300)));
      hero.barriers.push((new placedBarrier(hero, 800, 350)));

      hero.barriers.push((new placedBarrel(hero, 100, 200, 175)));
      hero.barriers.push((new placedBarrel(hero, 900, 200, 175)));
      hero.barriers.push((new placedBarrel(hero, 100, 400, 175)));
      hero.barriers.push((new placedBarrel(hero, 900, 400, 175)));

      hero.barriers.push((new placedTurret(hero, 500, 100)));
      hero.barriers.push((new placedTurret(hero, 500, 500)));
      menu = 1;

    }

    if ((mouseY <= (mouseX * m) + (c * 3)) && (mouseY >= (mouseX * m) + (c * 2.15)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.05))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 2;

    }

    if ((mouseY <= (mouseX * m) + (c * 4.15)) && (mouseY >= (mouseX * m) + (c * 3.25)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.1))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 0;

    }

    if ((mouseY >= 360) && (mouseY <= 540) && (mouseX >= 10) && (mouseX <= 498)) {
      control1 = true;
      control2 = false;
    }

    if ((mouseY >= 360) && (mouseY <= 540) && (mouseX >= 502) && (mouseX <= 990)) {
      control1 = false;
      control2 = true;
    }
  }

  if (menu === 4) {
    if ((mouseY >= (mouseX * m) + c) && (mouseY <= (mouseX * m) + (c * 1.9)) && (mouseY <= (mouseX * (m2)) + (c2))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 1;

    }

    if ((mouseY <= (mouseX * m) + (c * 3)) && (mouseY >= (mouseX * m) + (c * 2.15)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.05))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 2;

    }

    if ((mouseY <= (mouseX * m) + (c * 4.15)) && (mouseY >= (mouseX * m) + (c * 3.25)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.1))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 0;

    }
  }

  if (menu === 2 || menu === 4) {
    if ((mouseY >= (mouseX * m) + c) && (mouseY <= (mouseX * m) + (c * 1.9)) && (mouseY <= (mouseX * (m2)) + (c2))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 1;

    }

    if ((mouseY <= (mouseX * m) + (c * 3)) && (mouseY >= (mouseX * m) + (c * 2.15)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.05))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 2;

    }

    if ((mouseY <= (mouseX * m) + (c * 4.15)) && (mouseY >= (mouseX * m) + (c * 3.25)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.1))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 0;

    }

    if ((mouseY >= 140) && (mouseY <= 320) && (mouseX >= 415) && (mouseX <= 990)) {
      control1 = true;
      control2 = false;
    }

    if ((mouseY >= 360) && (mouseY <= 540) && (mouseX >= 415) && (mouseX <= 990)) {
      control1 = false;
      control2 = true;
    }
  }

  if (menu === 3) {
    if ((mouseY >= (mouseX * m) + c) && (mouseY <= (mouseX * m) + (c * 1.9)) && (mouseY <= (mouseX * (m2)) + (c2))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      bulletsFired = [];
      targetBalloons = [];
      hero.x = 500;
      hero.y = 300;
      //	balloonSpawnMultiplier = 1;
      balloonSizeMultiplier = 3;
      hero.weapon_number = 0;
      hero.weapons.length = 0;
      hero.pickups.length = 0;
      score = 0;
      hero.weapons.push(new DesertEagle(hero));
      shotgun = (new Shotgun(hero));
      hero.pickups.push(shotgun);
      rifle = (new Rifle(hero));
      hero.pickups.push(rifle);
      zombieRound = 1;
      zombies = 6;
      nextRound = true;
      targetTimer = 1;
      let newBalloon = new balloon(hero, health);
      targetBalloons.push(newBalloon);
      barrier = (new Barrier(hero));
      hero.pickups.push(barrier);
      turret = (new Turret(hero));
      hero.pickups.push(turret);
      granade = (new Granade(hero));
      hero.pickups.push(granade);
      hero.barriers = [];
      turretBulletsFired = [];
      granades = [];
      granadeKills = [];
      health = 20;
      hero.health = 25;
      hero.colorR = 255;
      hero.colorG = 255;
      hero.colorB = 255;
      hero.colorBHealth = 0;
      hero.colorRHealth = 0;
      hero.colorGHealth = 255;
      hero.healthw = 35;
      hero.healthh = 5;
      bulletsFired = [];
      barrelsToExplode = [];
      barrelsToExplode2 = [];
      turretBulletsFired = [];
      barrelsToSplice = [];
      barrelArea = 175;
      granadeCounter = 0;
      hero.barriers.push((new placedBarrier(hero, 200, 200)));
      hero.barriers.push((new placedBarrier(hero, 200, 250)));
      hero.barriers.push((new placedBarrier(hero, 200, 300)));
      hero.barriers.push((new placedBarrier(hero, 200, 350)));

      hero.barriers.push((new placedBarrier(hero, 800, 200)));
      hero.barriers.push((new placedBarrier(hero, 800, 250)));
      hero.barriers.push((new placedBarrier(hero, 800, 300)));
      hero.barriers.push((new placedBarrier(hero, 800, 350)));

      hero.barriers.push((new placedBarrel(hero, 100, 200, 175)));
      hero.barriers.push((new placedBarrel(hero, 900, 200, 175)));
      hero.barriers.push((new placedBarrel(hero, 100, 400, 175)));
      hero.barriers.push((new placedBarrel(hero, 900, 400, 175)));

      hero.barriers.push((new placedTurret(hero, 500, 100)));
      hero.barriers.push((new placedTurret(hero, 500, 500)));
      menu = 1;

    }

    if ((mouseY <= (mouseX * m) + (c * 3)) && (mouseY >= (mouseX * m) + (c * 2.15)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.05))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 2;

    }

    if ((mouseY <= (mouseX * m) + (c * 4.15)) && (mouseY >= (mouseX * m) + (c * 3.25)) && (mouseY <= (mouseX * (m2)) + (c2 * 1.1))) { //&& (mouseY >= (-mouseX * (m/5)) - (c/5))){
      menu = 0;

    }
  }
}

function keyReleased() {
  if (keyCode === 32 && control2 && hero.weapons[hero.weapon_number].type === "Granade" && ((granades.length === 0) || (granades[(granades.length - 1)]).count > 75) && (hero.weapons[hero.weapon_number].current > 0)) {
    if (granadeCounter > 60) {
      granadeCounter = 60;
    }
    hero.weapons[hero.weapon_number].current -= 1;
    let mouseVector = getMouseVector(hero.x, hero.y);
    throwngranade = new thrownGranade(hero.x + (300 * (granadeCounter / 60)), hero.y + (300 * (granadeCounter / 60)), hero.xdir, hero.ydir, hero);
    hero.weapons[hero.weapon_number].isShooting = true;
    granades.push(throwngranade);
    granadeCounter = 0;
  }
}