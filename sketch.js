
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;


	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(100,200,40)
	paperball.shapeColor = "red"
	
	dustbin1 = new Dustbin(600,670,100,50)

	ground = new Ground(400,690,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paperball.display()
  dustbin1.display()
  ground.display()

  if(keyDown(UP_ARROW))
  {
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1,y:-5})
  }
  drawSprites();
 
}



