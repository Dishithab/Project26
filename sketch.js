 //namespacing for Matter.Engine,World,Bodies,Body,Render,Constraint
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Render = Matter.Render;
 const Constraint = Matter.Constraint;

 //creating variables
 var bob1,bob2,bob3, bob4,bob5, roofObject
 var rope1,rope2,rope3, rope4,rope5;
 var world;

 function setup() 
 {
	//creating canvas
	createCanvas(800, 600);
	rectMode(CENTER);

	//creating engine
	engine = Engine.create();
	world = engine.world;

	//adding the roof to the roof class
	roofObject=new roof(400,250,230,20);

	//adding all the bobs to the bob class
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	//adding all the ropes to the rope class
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	
  
}

 function draw() 
 {
	rectMode(CENTER);

	//setting background
	background(230);

	//displaying the roof
	roofObject.display();

	//displaying all the ropes
    rope1.display();
  	rope2.display();
  	rope3.display();
  	rope4.display();
  	rope5.display();

	//displaying all the bobs
  	bob1.display();
  	bob2.display();
  	bob3.display();
  	bob4.display();
  	bob5.display();
 }

 function keyPressed() 
 {
	if (keyCode === UP_ARROW)
    {
		//APPLYING A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
   		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45});
	}
 }


