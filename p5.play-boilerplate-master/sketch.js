var obj1, obj2;
function setup() {
  createCanvas(1600,800);
  obj1=createSprite(300, 400, 60, 80);
  obj2=createSprite(500,400,60,80);
  obj1.shapeColor="Blue";
  obj2.shapeColor="Blue"; 
}

function draw() {
  background(0,0,0); 
  obj1.x=mouseX;
  obj1.y=mouseY;
  if(obj2.x-obj1.x < obj2.width/2+obj1.width/2 && obj1.x-obj2.x < obj1.width/2+obj2.width/2 && obj2.y-obj1.y < obj2.height/2+obj1.height/2 && obj1.y-obj2.y < obj1.height/2+obj2.height/2){
    obj1.shapeColor="Red";
    obj2.shapeColor="Red"; 
  } 
  else {
    obj1.shapeColor="Blue";
    obj2.shapeColor="Blue"; 

  }

  drawSprites();
}