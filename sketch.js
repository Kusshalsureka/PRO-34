//Create variables here
var dog;
var happyDog;
 var database;
 var foodS;
var foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000,1000);
  database=firebase.database();
  dog=createSprite(200,200,100,50);
  dog.addImage(dogImg);
  dog.scale=0.15;
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

background("yellow");
  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
  }

textSize(32);
text('PRESS UP_ARROW KEY TO FEED MILK TO DOG);', 10, 30);
fill(0,80,78);

drawSprites();
  

}
function readStock(data){
    
foodS=data.val();  
}

function writeStock(x){

  if(x<-0){
x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

