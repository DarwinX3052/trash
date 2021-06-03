
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;	
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	paperObject=new Paper(130, 50, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  fill("black");
  textSize(24)
  text("move by using left or right", 600, 100);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
	if (keyWentDown("Right")){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-150})
	}
	if (keyWentDown("Left")){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-35,y:-150})
	}
}

