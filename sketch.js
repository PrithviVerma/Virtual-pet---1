var dogImage, happyDog, database, foodS, foodStock,dog,database;

function preload()
{
dogImage = loadImage("images/Dog.png");
happyDog = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,30,30);
  dog.addImage(dogImage);
 dog.scale = 0.2;
 foodStock = database.ref('Food')
 foodStock.on("value",readStock);




}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);

}

drawSprites();
fill("black")
text("NOTE: PRESS UP ARROW KEY TO FEED THE DOG",100,100);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0;
}else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}

