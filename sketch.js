var backgr,backgrImage;
var bird,bird_flying;
var ground,groundImage;

var food,foodGroup,foodImage;
var obstacles,obstaclesImage,obstaclesGroup;

function preload(){

 backgrImage = loadImage("forest.jpg");

bird_flying = loadImage("bird.jpg");

foodImage = loadImage("worm.jpg") ;

obstacleImage = loadImage("eagle.jpg");

}

function setup() {
createCanvas(800, 400);

backgr = createSprite(50,0,10,40);
backgr.addImage("forest.jpg",backgrImage);
backgr.scale = 2.5
backgr.x = backgr.width/2;
backgr.velocityX = -4;

bird = createSprite(100,340,20,50);
bird.addImage("bird.jpg",bird_flying);
bird.scale = 0.5;

ground = createSprite(400,350,800,10);
ground.velocityX = -4;
ground.x = ground.width/2;
ground.visible = false;

foodGroup = new Group();
obstacleGroup = new Group();

score = 0;

}

function draw() {
  background(255);

  camera.position.x = bird.x;
  camera.position.x = bird.x;

if(ground.x < 0){
  ground.x = ground.width/2;
}

if(backgr.x < 100){
  backgr.x = backgr.width/2;
}

if(foodGroup.isTouching(bird)){
  foodGroup.destroyEach();
  score = score+2;
}
  switch(score){
   case 10: bird.scale =  0.5;
             break;
    case 20: bird.scale = 0.6;
             break;
    case 30: bird.scale = 0.5;
             break;
    case 40: bird.scale = 0.6;
            break;
     default:break;       
 }

if(keyDown("space")){
  bird.velocityY = -12;
}
 bird.velocityY = bird.velocityY + 0.8;

bird.collide(ground);
spawnfood();
spawnobstacle();

if(obstacleGroup.isTouching(bird)){
bird.scale = 0.3;
}

  drawSprites();

stroke("white");
textSize(20);
fill("white");
text("score: "+score,500,50);

}


function spawnfood () {
  if (frameCount % 160 === 0) {
    var worm= createSprite(600,250,40,10);
    worm.y = Math.round(random(70,170));
    worm.addImage(foodImage);
    worm.scale = 0.06;
   worm.velocityX = -3;

   worm.lifetime = 200;

    worm.depth = bird.depth;
    bird.depth = bird.depth + 1;

    foodGroup.add(worm);
  }
}

function spawnobstacle () {
  if (frameCount % 300 === 0) {
    var eagle= createSprite(600,20,40,10);
    eagle.addImage(obstacleImage);
    eagle.scale = 0.4;
  eagle.velocityX = -3;

    eagle.lifetime = 300;

    obstacleGroup.add(eagle);

  }
}





