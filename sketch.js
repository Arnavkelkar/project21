var bullet,wall;
var speed,weight,thickness;
var deformation;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80);
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(0);
  bullet.collide(wall);

  if (damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }
  drawSprites();
}