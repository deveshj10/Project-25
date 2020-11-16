
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper,dustbin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,300,30);
dustbin = new Dustbin();
ground = new Ground(600,600,1200,10);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
ground.display();
  dustbin.display();
  paper.display();

  

  drawSprites();
 
}

function keyPressed (){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});
  }
}


