
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var playerimg;

function preload()
{
	playerimg = loadImage("Images/Boy.png");
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = createSprite(250,480,10,10);
	player.addImage(playerimg);
	player.scale = 0.04;
	wall1 = createSprite(120,480,235,4);
	wall2 = createSprite(380,480,235,4);
	wall3 = createSprite(2,250,4,460);
	wall4 = createSprite(495,250,4,460);
	wall5 = createSprite(2,20,465,4);
	wall6 = createSprite(380,20,235,4);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



