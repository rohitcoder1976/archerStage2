class computerArcher{

    constructor(x,y,width,height,angle){

        var options={
            isStatic:true,
        }

        this.width=width;
        this.height=height;
        this.angle=angle;

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("./assets/computerArcher.png");
        World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        var angle=this.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }


}