const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playArcher,computArcher;

var arrow;



function setup() {
  canvas = createCanvas(1300, 600);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playArcher=new playerArcher(336,playerBase.body.position.y-180,100,100,-1.4);
  computArcher=new computerArcher(970,210,100,100,-4.4);

  computerBase = new ComputerBase(width - 300,400,180, 150);   
  computer = new Computer(width - 280,computerBase.body.position.y - 153,50,180 );
    
  //Create an arrow Object
  arrow=new playerArrow(playArcher.body.position.x+100,playArcher.body.position.y+10,60,20,0.2);
  
  
}



function draw() {
  background(180);

  Engine.update(engine);

  //Knowledge of coordinates
  textSize(20);
  fill("red");
  text(mouseX+","+mouseY,mouseX,mouseY);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();

  playArcher.display();
  computArcher.display();

  arrow.display();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playArcher.body.angle);
  }
}




