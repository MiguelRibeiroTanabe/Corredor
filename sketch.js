var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  boyImg = loadAnimation("Jake1.png","Jake3.png","Jake4.PNG");
  pathImg = loadImage("path.png");
 
}

function setup(){
  
  createCanvas(400,400);

 path = createSprite(200,200); 
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

boy = createSprite(200,200);
boy.addAnimation("boy",boyImg);
boy.scale = 1;
  
// create left Boundary
leftBoundary = createSprite(0,0,100,800);
//set visibility as false for left boundary
leftBoundary.visible = false;

//create right Boundary
rightBoundary = createSprite(410,0,100,800);
//set visibility as false for left boundary
rightBoundary.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
 boy.x = World.mouseX;
 //console.log(boy);
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}