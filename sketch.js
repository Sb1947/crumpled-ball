
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(0,690,10)
	paperball.shapeColor = "red"
	
	dustbin1 = new Dustbin(750,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paperball.display()
  dustbin1.display()
  drawSprites();
 
}



