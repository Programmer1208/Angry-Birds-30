class Slingshot
{
    constructor(body1,point)
    {
   var op=
       {
        bodyA:body1,
        pointB:point ,
        length:10,
        stiffness:0.04
     }
    this.pointB=point;
     this.slng=Matter.Constraint.create(op);
     World.add(world,this.slng);

    }

    display()
    {
        push(); 
        strokeWeight(6);
        line(bird.bodies.position.x,bird.bodies.position.y,this.pointB.x,this.pointB.y);
        pop();
    }

}