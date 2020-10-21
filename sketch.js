var wall;
var bullet, weight,speed;
var width;
function setup() {
  createCanvas(1600,400);

  wall = createSprite(1300, 300, width, height/2);
  wall.shapeColor="red";

  width= random(22,83);

  weight= random(30,52);

  speed= random(223,321);

  bullet= createSprite(50,200,50,5);
  bullet.shapeColor= "white";
  bullet.velocityX= speed;
}

function draw() {
  background(0); 
  
  if (hasCollided(bullet,wall)) {
    bullet.velocityX= 0;
    var damage= 0.5*weight*speed*speed/(width*width*width);  
  }

  if (damage>10) {
    wall.shapeColor=" pink";
  }

  if (damage<10) {
    wall.shapeColor= "green";
  }
  

  drawSprites();
}

