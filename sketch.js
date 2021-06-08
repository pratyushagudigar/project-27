
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
var roofObject;
var rope1,rope2,rope3,rope4,rope5;

function preload(){
   
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

var bobDiameter = 50;

	//Create the Bodies Here.
bobObject1 = new Bob(200,500,bobDiameter);
bobObject2 = new Bob(250,500,bobDiameter);
bobObject3 = new Bob(300,500,bobDiameter);
bobObject4 = new Bob(350,500,bobDiameter);
bobObject5 = new Bob(400,500,bobDiameter);

roofObject = new Roof(400,100,700,50);

rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*4,0)
rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*2,0)
rope3 = new Rope(bobObject3.body, roofObject.body, 0,0)
rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter*2,0)
rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*4,0)

	Engine.run(engine);
   
	console.log("hi");
}


function draw() {
  
  rectMode(CENTER);
  background(200);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  drawSprites();
 
}
function keyPressed(){
if(keyCode == UP_ARROW)
{
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x: -100,y: -20});
}
}

