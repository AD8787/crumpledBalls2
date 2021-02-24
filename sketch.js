const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 450, 70);

	ground = new Ground(400, 680, 800, 20);

	dustbin = new Dustbin(600, 650);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper.display();
  
  ground.display();

  dustbin.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y:-15})
	}
}