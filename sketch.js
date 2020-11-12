const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine;
var world;
var polygon_img;

function preload () {
    polygon_img=loadImage("polygon.png")
}

function setup () {
  createCanvas(900,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground=new Ground();
  
  polygon=Bodies.circle(50,200,20);

  //1st stand in which the blocks will be laid
  stand1=new Stand(390,300,250,10);

  //1st tower 1st level
  block1=new Block(300,275,30,40);
  block2=new Block(330,275,30,40);
  block3=new Block(360,275,30,40);
  block4=new Block(390,275,30,40);
  block5=new Block(420,275,30,40);
  block6=new Block(450,275,30,40);
  block7=new Block(480,275,30,40);
  
  //2nd row for the first stand
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);

  //3rd row of the first stand
  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);

  //4th or the last row for the first stand
  block16=new Block(390,155,30,40);

  //2nd stand in which the blocks will be laid
  stand2=new Stand(700,200,200,10);

  //1st row for the second stand
  block17=new Block(640,175,30,40);
  block18=new Block(670,175,30,40);
  block19=new Block(700,175,30,40);
  block20=new Block(730,175,30,40);
  block21=new Block(760,175,30,40);

  //2nd row for the second stand
  block22=new Block(670,135,30,40);
  block23=new Block(700,135,30,40);
  block24=new Block(730,135,30,40);

  //3rd row for the second stand
  block25=new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

}

function draw () {
  background(56,44,44);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);


  ground.display();

  fill(236,242,65);
  stand1.display();

  fill(242,9,218);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(24,244,160);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(239,33,14);
  block13.display();
  block14.display();
  block15.display();

  fill(37,30,237)
  block16.display();

  
  fill(236,242,65);
  stand2.display();

  fill(33,39,237);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(28,239,190)
  block22.display();
  block23.display();
  block24.display();

  fill(155,57,139)
  block25.display();
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}