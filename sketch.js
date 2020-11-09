
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paper1;

var dustbin1,dustbin2, dustbin3

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //paper1= new Paper(300,200);

  dustbin1= new Dustbin(300,300,3,10);
  dustbin2= new Dustbin(310,310,20,5);
  
  dustbin3= new Dustbin(315,315,3,10);

	Engine.run(engine);
  
}
                                                                                                                 

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
  
  keyPressed()
 
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(PaperObject.Body.position,{x:85,y:-85})
  }
}

