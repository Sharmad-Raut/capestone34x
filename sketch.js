var helicopter;
var back ;
var rope;
var box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

  helicopter=loadImage("heli.avif");
  back=loadImage("background");
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  rope=new Rope()
  ground=new Ground()
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites()
  
}

