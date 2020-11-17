var BinImg,PaperImg,Bin1,PaperBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
	BinImg = loadImage("dustbin.png");
	PaperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,70);
	// paperObject.addImage(PaperImg);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
PaperBody = createSprite(600,350,10,10);
PaperBody.addImage(PaperImg);

}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:285,y:-285});
    
  	}
}





