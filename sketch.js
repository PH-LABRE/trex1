
var trex ,trex_running;
var ground,invisibleGround,groundImage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
 
  //crie um sprite de trex
 trex=createSprite(50,180,20,50)
 trex.addAnimation("running", trex_running)
 trex.scale=0.5
 trex.X=50
 ground = createSprite(200,200,400,20)
}

function draw(){
  background("white")
  if (keyDown("space")) {
   trex.velocityY=-10 
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
drawSprites()
}
