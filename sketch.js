var rect1,rect2,rect3,rect4,rect5,rect6;

function setup() {
  createCanvas(1200,800);
rect1= createSprite(400, 400, 100, 50);
 rect2=createSprite(500,600,150,40); 
 rect3=createSprite(400,500,150,40); 
 rect4=createSprite(300,300,150,40); 
 rect5=createSprite(200,500,150,40); 
 rect6=createSprite(100,100,150,40); 

 rect1.shapeColor="red";
 rect2.shapeColor="red";
 rect3.shapeColor="cyan";
 rect4.shapeColor="yellow";
 rect5.shapeColor="green";
 rect6.shapeColor="blue";

 rect3.velocityX=-5;
 rect5.velocityX=5;
}

function draw() {
  background(0);  
// Calling the function
BOUNCEOFF(rect3,rect5);
drawSprites();
}
// Creating two objects-object1 and object-2
function BOUNCEOFF(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2){
  
      object2.velocityX=object2.velocityX*(-1);
      object1.velocityX=object1.velocityX*(-1);
    }
   
   if(object1.y-object2.y<object2.height/2+object1.height/2 && 
    object2.y-object1.y<object2.height/2+object1.height/2 ){
      object2.velocityY=object2.velocityY*(-1);
      object1.velocityY=object1.velocityY*(-1);
    
  }


}