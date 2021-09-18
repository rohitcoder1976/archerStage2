class playerArcher{

    constructor(x,y,width,height,angle){

        var options={
            isStatic:true,
        }
        this.angle=angle;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("./assets/playerArcher.png");
        World.add(world,this.body);
    }

    display(){

        console.log(this.angle);

        //Changing angle of bow with arrow keys
        if (keyIsDown(LEFT_ARROW)&&this.angle>-2){
            this.angle-=0.02;
        }
        if (keyIsDown(RIGHT_ARROW)&&this.angle<-1.2){
            this.angle+=0.02;
        }
        
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }

}