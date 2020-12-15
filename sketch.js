var car1,wall1,weight,speed,deformation;

function setup() {
  createCanvas(800,400);

  car1 = createSprite(100,100,50,50);
  car1.shapeColor = color(225);
  wall1 = createSprite(700,200,40,300);

  speed = random(55,90);
  weight = random(400,1500);
  
}

function draw() {
  background("black");  

  car1.velocityX = speed;

  deformation = 0.5 * weight * speed * speed/22500;

  if(deformation < 100 && car1.isTouching(wall1)){
    car1.collide(wall1)
    car1.shapeColor = color(0,255,0);
  }

  if(deformation > 100 && deformation < 180 && car1.isTouching(wall1)){
    car1.collide(wall1)
    car1.shapeColor = color(230,230,0);
  }

  if(deformation > 180 && car1.isTouching(wall1)){
    car1.collide(wall1)
    car1.shapeColor = color(255,0,0);
  }
  drawSprites();
}