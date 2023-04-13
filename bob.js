 //creating the bob class
 class bob
{
	constructor(x,y,r)
	{
		//setting the options for the ball
	  var options={
	  isStatic:false,
	  restitution:1,
	  friction:0,
	  density:0.8
	  }
	   //nameSpacing
		this.x=x;
		this.y=y;
		this.r=r
		
		//creatin the bob
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		//adding the bob to the world
		World.add(world, this.body);

	}
	display()
	{
		//nameSpacing for this.body.position
	    var paperpos=this.body.position;
			
		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER);
		fill(255,0,255);
		ellipse(0,0,this.r, this.r);
		pop();
			
	}

}

