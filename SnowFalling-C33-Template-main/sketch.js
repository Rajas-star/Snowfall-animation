var bg;
var boy;



function preload(){
 bg = loadImage("snow1.jpg");
boy = loadImage("snowfall.jpg");
}



function setup() {
  createCanvas(800,400);
    boy = createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}