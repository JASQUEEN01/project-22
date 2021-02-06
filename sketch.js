const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fairy, fairy_img, star, star_img, star2, star2_img;
var engine, world;

function preload(){
   //preload the images here
   fairy_img = loadImage("images/fairy1.png");
   star_img = loadImage("images/star.png");
   star2_img = loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);

  fairy = createSprite(300,500,10,10);
  fairy.addImage(fairy_img);
  fairy.scale = 0.2;

  engine = Engine.create();
  world = engine.world;  

  star = Bodies.rectangle(700, 100, 10, 10);
  World.add(world, star);
  
}


function draw() {
  background(star2_img);

  Engine.update(engine);
  //star2.x = star.position.x;
  //star2.y = star.posioion.y;

  image(star_img, star.position.x, star.position.y, 35, 35);

  if(star.position.y>470){
    Matter.Body.setStatic(star, true);
  }

  if(keyWentDown(LEFT_ARROW)){
    fairy.x = fairy.x-70;
  }

  if(keyWentDown(RIGHT_ARROW)){
    fairy.x = fairy.x+70;
  }

  drawSprites();
}
