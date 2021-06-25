
var track, pathImg, path, runner, energydrink;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  energydrinkImg = loadImage("energyDrink.png");
  runneranim = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  // Moving background
  
path = createSprite(200,0,300,300);
path.addImage("path",pathImg);
path.velocityY=4;
path.scale=1;

runnerboy = createSprite(225,300,100,100);
runnerboy.addAnimation("running",runneranim);

invisibleleftborder = createSprite(20,0,50,400);
invisibleleftborder.visible = false;
invisiblerightborder = createSprite(350,0,50,400);
invisiblerightborder.visible = false;

energydrink = createSprite(300,300,100,100);
energydrink.addImage("energydrink", energydrinkImg);
energydrink.scale = 0.1;

//adding scale and position to runner
runnerboy.scale = 0.1;
runnerboy.x = 200;
}




function draw() {
  background("black");

  drawSprites();


  //runnerboy.velocityY = runnerboy.velocityY - 0.05;

  runnerboy.collide(invisibleleftborder);
  runnerboy.collide(invisiblerightborder);

  // left right movement
  if(keyDown("left"))
  {
    runnerboy.x = runnerboy.x - 10;
  }
  else if(keyDown("right"))
  {
    runnerboy.x = runnerboy.x + 10;
  }

  //code to reset the background
if(path.y>=400)
{
  path.y=height/2;
}

}
