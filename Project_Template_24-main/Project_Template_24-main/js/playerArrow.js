class playerArrow{

    constructor(x,y,width,height,angle){

        var options={
            isStatic:true,
        }
       
       this.angle=angle;
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.image=loadImage("./assets/arrow.png");
       World.add(world,this.body);

    }

    shoot(){
      var velocity=p5.Vector.fromAngle(playArcher.angle);
      velocity.mult(6);
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body,{x:velocity.x*30,y:-velocity.y/2});
     
    }

    display(){

      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();


    }


}