var knife,sword;
var score;
var PLAY=1;
var END=0;
var gamestate=1;
var score;

function preload(){
swordImage=loadImage ("sword.png")
fruit1Image=loadImage("fruit1.png")
fruit2Image=loadImage("fruit2.png")
fruit3Image=loadImage("fruit3.png") 
fruit4Image=loadImage("fruit4.png")
monsterImage=loadAnimation("alien1.png","alien2.png")
gameoverImage=loadImage("gameover.png")  
gameoverSound=loadSound("gameover.mp3")
knifeSound=loadSound("knifeSwooshSound.mp3")
}
function setup() {
createCanvas(600,600);
sword=createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale=0.7
score=0
fruitGroup=createGroup();
enemyGroup=createGroup();
}

function draw(){
background ("lightblue")
text("Score :"+ score,400,30); 

if(gamestate===1){
  fruits ();
Enemy ();
   sword.y=World.mouseY;
   sword.x=World.mouseX;
 if (sword.isTouching(fruitGroup)){
  fruitGroup.destroyEach();
   knifeSound.play();
  score=score+1;
}
 if  (sword.isTouching(enemyGroup)){
   gamestate=0
 }
}
 if (gamestate===0){
     sword.addImage(gameoverImage)
   gameoverSound.play();
   sword.x=200;
   sword.y=200;
   fruitGroup.destroyEach();
   enemyGroup.destroyEach();
   fruitGroup.setVelocityXEach(0);
   enemyGroup.setVelocityXEach(0);
 }
  
 

  
  
drawSprites();
  

}

function fruits(){
if(World.frameCount%80===0){
fruit=createSprite(400,200,20,20);
fruit.scale=0.2;
r=Math.round(random(1,4));
if (r==1) {
fruit.addImage(fruit1Image);
}else if (r==2) {
fruit.addImage(fruit2Image);
} else if(r==3) {
  fruit.addImage(fruit3Image);
}else{
  fruit.addImage(fruit4Image);
}
  fruit.y=Math.round(random(50,340));

  fruit.velocityX=-(7+(score/4));
  fruit.setLifetime=100;

  fruitGroup.add(fruit);
}  
}
function Enemy(){
if(World.frameCount%60===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-(8+(score/10));
  monster.lifetime=50;
  
enemyGroup.add(monster);
}  
  
  
}

