const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boy,boyImage;
var sound;

var bg,bgImg;

var snow=[];

function preload(){
bgImg=loadImage("snow1.jpg");
boyImage=loadImage("boy.png");
sound=loadSound("sound/JoyMusic.mp3")
}




function setup() {
   createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
 
  sound.play();

  boy=createSprite(570,650,20,20);
  boy.addAnimation("boystanding",boyImage);
  boy.scale=0.2;


  

  if(frameCount%50===0){
  //create snowfall objects
  for (var e = 0; e<200 ; e++)
  {
    snow.push(new snowfall(random(0,800),random(0,800)));
  }
  }




  
   }

function draw() {

  background(bgImg);

  boy.velocityX=-30;



  


  Engine.update(engine);

  for(var i=0;i<200;i++){
  snow[i].display();
  snow[i].updateY();

  
  
  drawSprites(); 
  
  }





  
}
