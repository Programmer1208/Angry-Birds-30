class Pig extends BaseClass
{
    constructor(x,y,w,h)
    {
        super(x,y,w,h) ;
        this.img=loadImage("sprites/enemy.png");
        this.Visibility=255;  
    }

    display()
    {

        
       // console.log(this.bodies.speed);

        if(this.bodies.speed <=3)
        {

            super.display();


        }
        else
        {
            World.remove(world,this.bodies);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            image(this.img,this.bodies.position.x,this.bodies.position.y,50,50);
            pop();
        }

    }
}