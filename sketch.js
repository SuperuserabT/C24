var bottom, left, right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(600,height,1200,20);

	//Create the Bodies Here.
	bottom=new DustbinClass(525, 650, 150, 20);
	right=new DustbinClass(600, 595, 20, 130);
	left=new DustbinClass(450, 595, 20, 130);
	paper=new PaperClass(50,550,50);

	ground = Bodies.rectangle(width/2, 664, width, 10 , {isStatic:true,friction:1} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  rect(ground.position.x,ground.position.y,width,10)
  image(dustbin,450,515,150,150)
  bottom.display();
  right.display();
  left.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85});

	}
}