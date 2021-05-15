var tom1, tom2, tom3, tom4, tom1Img, tom2Img, tom3Img, tom4Img;
var garden, gardenImg;
var jerry1, jerry2, jerry3, jerry4, jerry1Img, jerry2Img, jerry3Img, jerry4Img;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");

    tom1Img = loadAnimation("images/cat1.png");
    tom2Img = loadAnimation("images/cat2.png", "images/cat3.png");
    tom4Img = loadAnimation("images/cat4.png");

    jerry1Img = loadAnimation("images/mouse1.png");
    jerry2Img = loadAnimation("images/mouse2.png", "images/mouse3.png");

    jerry4Img = loadAnimation("images/mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    tom1 = createSprite(700, 650, 40, 40);
    tom1.addAnimation("TomStill", tom1Img)
    tom1.scale = 0.15
    jerry1 = createSprite(150, 650, 20, 20);
    jerry1.addAnimation("JerryStill", jerry1Img)
    jerry1.scale = 0.15
}

function draw() {
    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide
    if (jerry1.isTouching(tom1)) {
        tom1.changeAnimation = ("cat3.png", tom3Img);
        jerry1.changeAnimation = ("mouse3.png", jerry3Img);
        tom1.velocityX = 0;
    }
    drawSprites();
}

function keyPressed() {

    //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW)
        tom1.velocityX = -2;
    tom1.velocityY = 0;
    tom2.changeAnimation = ("cat3Running", tom2Img);
    jerry1.changeAnimation = ("mouse3.png", jerry3Img);


}