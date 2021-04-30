var rCherryImg, pCherryImg, bCherryImg;
var snakeImg;
var wallImg;
var PLAY = 1
var END = 0
var gameState = PLAY;

function preload(){

    rCherryImg = loadImage("images/Rcherry.png");
    pCherryImg = loadImage("images/Pcherry.png");
    bCherryImg = loadImage("images/cherry.png");

    wallImg = loadImage("images/wall.png");

    snakeImg = loadImage("images/snake.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    snake = createSprite(0, 50);
    snake.scale = 0.3;
    snake.addImage(snakeImg);

    wall1 = createSprite(width/2, 10, width, 20);
    //wall1.addImage(wallImg);
    //wall1.scale = 3;
    wall1.shapeColor = "#8E5B19";

    wall2 = createSprite(width/2, height-10, width, 20);
    //wall2.addImage(wallImg);
    wall2.shapeColor = "#8E5B19";

    wall3 = createSprite(1080, 50);
    wall3.addImage(wallImg);
    wall3.scale = 0.7;

    wall4 = createSprite(800, 580);
    wall4.addImage(wallImg);
    wall4.scale = 0.7;

    wall5 = createSprite(480, 50);
    wall5.addImage(wallImg);
    wall5.scale = 0.7;

    wall6 = createSprite(250, 580);
    wall6.addImage(wallImg);
    wall6.scale = 0.7;

    rCherryGroup = new Group();
    pCherryGroup = new Group();
    bCherryGroup = new Group();

    score = 0
}

function draw(){
    if(gameState === PLAY){
        background("green");

        if(keyDown("left")){
            snake.x -= 5;
            snake.mirrorX(1);
            snake.rotation = 180;
        } 
        else if(keyDown("right")){
            snake.x += 5;
            snake.mirrorX(-1);
            snake.rotation = -180;
        }
        else if(keyDown("up")){
            snake.y -= 5;
            snake.mirrorY(-1);
            snake.rotation = 90;
        }
        else if(keyDown("down")){
            snake.y += 5;
            snake.mirrorY(+1);
            snake.rotation = -90;
        }

        if(frameCount % 50 === 0){
            spawnRCherry();
        }

        if(frameCount % 200 === 0){
            spawnBCherry();
        }

        if(frameCount % 100 === 0){
            spawnPCherry();
        }
        if(pCherryGroup.isTouching(snake)){
            
        }
        if(rCherryGroup){
            console.log(rCherryGroup.length)
            for(var i = 0;i<rCherryGroup.length;i++){  
                if(rCherryGroup.isTouching(snake)){
                    console.log(i)
                    var result = get(i)
                    console.log(result)
                    rCherryGroup.destroyEach(i)
                    score = score + 1 
                    //snake.scale = snake.scale + score/100 
                }   
            }
        }

        if(bCherryGroup.isTouching(snake)){
            gameState = END
        }
    }
    else if(gameState === END){
        snake.setVelocity(0,0)
    }
    drawSprites();
}
