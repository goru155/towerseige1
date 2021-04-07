const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
  //stand1
  //leve one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //leve two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //leve three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //stand2
  stand2 = new Stand(700,200,200,10);
  //level one
  block17 = new Block(625,175,30,40);
  block18 = new Block(655,175,30,40);
  block19 = new Block(685,175,30,40);
  block20 = new Block(715,175,30,40);
  block21 = new Block(745,175,30,40);
  block22 = new Block(775,175,30,40);
  //level2
  block23 = new Block(655,135,30,40);
  block24 = new Block(685,135,30,40);
  block25 = new Block(715,135,30,40);
  block26 = new Block(745,135,30,40);
  //level3
  block27 = new Block(685,95,30,40);
  block28 = new Block(715,95,30,40);
  //top
  block29 = new Block(700,55,30,40);

  //ball
  ball = Bodies.circle(150,200,20);
  World.add(world,ball)

  //slingshot
  slingShot = new  SlingShot(this.ball,{x:150, y:200});

}
function draw() {
  background(188,67,67); 
 
  fill("green");
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  fill("yellow");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block27.display();
  block28.display();

  fill("seagreen");
  block16.display();
  block29.display();
 
  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
