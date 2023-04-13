 //creating Roof class
 class roof
 {
	constructor(x,y,w,h)
	{
		//making the roof to stay in the same place by adding isStatic code
		var options={
		isStatic:true			
		}
		//nameSpacing
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		//creating the roof
		this.body=Bodies.rectangle(x, y, w, h , options);
		//adding to the world
 		World.add(world, this.body);

	}
	display()
	{
		//nameSpacing for this.body.position
		var groundPos=this.body.position;		

		push();
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER);
		fill(128,128,128);
		rect(0,0,this.w, this.h);
		pop();
			
	}

 }