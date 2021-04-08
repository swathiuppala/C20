var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 200, 30, 30);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}