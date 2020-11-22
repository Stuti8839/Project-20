var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
  car.shapeColor = "blue";
  wall.shapeColor = "grey";
}

function draw() {
  background("black");
  
  if (isTouching(wall, car)) {
    car.velocityX=0;
    deformation = (0.5*weight*speed*speed)/22500;
    if (deformation<100) {
      car.shapeColor = "green";
    }else if (100<deformation<180) {
      car.shapeColor = "yellow";
    }else if (deformation>180) {
      car.shapeColor = "red";
    }
  }
  else {
    car.shapeColor = "blue";
    wall.shapeColor = "grey";
  }  
  drawSprites();
}

function isTouching(object1, object2) {
  if(object2.width/2 + object1.width/2 > object2.x - object1.x &&
      object2.width/2 + object1.width/2 > object1.x - object2.x &&
      object2.height/2 + object1.height/2 > object2.y - object1.y &&
      object2.height/2 + object1.height/2 > object1.y - object2.y) {
      return true;
  } else {
      return false;
  }
}