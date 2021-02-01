var logGroup,carGroup,weapons,thief,thiefImg,story,police,traffic,trafficImg,policeImg,score,timeLimit,gameState,camp,campimg,water,waterImg,grass,grassImg,roadImg
var carImg1,carImg2,button,caught,form,roa;

function preload(){
  campimg=loadImage('images/camp.png')
  waterImg=loadImage('images/water.gif')
  grassImg=loadImage('images/grassland.jpg')
carImg1=loadImage('images/car1.png')
carImg2=loadImage('images/car.png')
//roadImg=loadImage('images/')
policeImg=loadImage('images/police.jpg')
trafficImg=loadImage('images/traffic.gif')
thiefImg=loadImage('images/thief.png')
roadImg=loadImage('images/road.jpg')
}

function setup(){
  createCanvas(1200,750)
gameState='Story'
score=0
timeLimit=120
story=new Story()
logGroup=new Group()
carGroup=new Group()
form=new Form()
timeLimit=120
score=0
caught=3
 
//  thief=createSprite(300,100,50,50)
//  thief.scale=0.2
//  thief.velocityX=0
//  thief.addImage('image2',thiefImg)
//  police=createSprite(600,375)
//  police.addImage('image3',policeImg)

     
}


function draw(){
  background(0)
  
  if(gameState==='Play'){
    story.start()
       }
 if(gameState==='Story'){
form.story()
 }
 
 
 
   
   
  //move()
  drawSprites()
}

