var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1, log2, log3;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2
	
	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6
	
	log1 = createSprite(width/3, 620, 20, 100);
	log1.shapeColor = color("red");

	log2 = createSprite(370, 650, 200, 20);
    log2.shapeColor = color("red");

	log3 = createSprite(width/1.7, 620, 20, 100)
	log3.shapeColor = color("red");
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);


}

function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y 

	packageSprite.collide(log1);
	packageSprite.collide(log2);
	packageSprite.collide(log3);
	
	drawSprites();
   
  }
  
  function keyPressed() {
   if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }

