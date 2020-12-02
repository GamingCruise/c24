const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1
var log1
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
log1=new LOG(100,300,100,PI/2);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(200,height,400,20)
    pig1=new Pig(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
}