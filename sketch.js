const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var GROUND;
var PLINKO;
var PARTICLE;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);

  GROUND = new Ground(240,height,800,20);
  PLINKO = new Plinko(50,j, 10)

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175))
  }

  
    



}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function draw() {
  background(255,255,255); 

  GROUND.display();
  push()
  fill("black")
  PLINKO.display();
  pop()
  
  if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10, 10,10)))
  }


    for(var j = 0; j < plinkos.length; j++){ 

      plinkos[j].display();
    }

    for(var k = 0; k < divisions.length; k++){ 

     divisions[k].display();
    }

    for(var k = 0; k <=width; k = k + 80){
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  drawSprites();
}