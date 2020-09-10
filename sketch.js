//Create variables here
var dog;
var database
var foodS,foodStock;
function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
   dog = createSprite(300,400,20,20)
  dog.addImage(dogImg)
  dog.scale = 0.15
  
  foodstock = database.ref('Food')
  foodstock.on("value",readStock)
}


function draw() {  
  background("white")
 if(keyWentDown(UP_ARROW)){
   writeStock(foods)
   dog.addImage(dogImg2)
 }
 text("foodRemaining"+foodS,160,200)
  text("press up arrow key to feed oreo milk ",160,470)
  drawSprites();
  //add styles here

}
function readStock(data){
  foods = data.val()

}
function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}



