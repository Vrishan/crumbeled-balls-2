
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var side1, side2, side3;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(40, 600, 70)
	ground = new Ground(800, 650, 1600, 10)
	side1 = new Side (1400,600,200,100)
	// side2 = new Side(1300,580,20,100)
	// side3 = new Side(1500,580,20,100)

	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background("white");

	drawSprites();
	paper1.display();
	ground.display();
	side1.display();
	// side2.display();
	// side3.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW )

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80} )
}

