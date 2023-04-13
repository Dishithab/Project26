 //creating class
 class rope
 {
	constructor(body1,body2, offsetX)
	{
		//setting options for creating the constraint
		var options={
		bodyA:body1,
		bodyB:body2
		}

		//creating the constraint(rope)
		this.rope=Constraint.create(options);
		//adding the rope to the world
		World.add(world,this.rope);

		//setting an offset
		this.offsetX = offsetX;
	}

	display()
	{
		//nameSpacing
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//Rendering a line between two bodies
		line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);

		
	}

}