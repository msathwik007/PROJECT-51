//Rocket chases flags and obstacles challenge it.

var score = 0
var rocket
var space
var PLAY = 1
var END = 2
var gameState=1;


function preload() {
  flagImg = loadImage("flag.png");
  rocket_moving = loadImage("rocket.png")
  spaceImg = loadImage("space.png")
  asteroids = loadImage("asteroids.png")
  comets = loadImage("comet.png")
  meteors = loadImage("meteor.png")
  meteroids = loadImage("meteroid.png")
  drawf_planets = loadImage("drawf_planet.png")
  gameOverImg = loadImage("gameover.png")
  winnerImg = loadImage("win.jpg")
  resetImg = loadImage("reset.png")

}

function setup() {
createCanvas(500,500);

space = createSprite(250,250,500,500)
space.addAnimation("moving",spaceImg)
space.velocityY = 4

rocket = createSprite(250,440,20,50);
rocket.addAnimation("running", rocket_moving);
rocket.scale = 0.5;

gameOver = createSprite(250,250,200,80)
gameOver.addImage(gameOverImg)
gameOver.visible = false
gameOver.scale = 0.4
winner = createSprite(250,250,200,80)
winner.addImage(winnerImg)
winner.visible = false
winner.scale = 0.6
reset = createSprite(470,30,50,50)
reset.addImage(resetImg)
reset.scale = 0.5



//rocket chases for flags

flagGroup = new Group()
asteroidsGroup = new Group()
cometGroup = new Group()
drawf_planetGroup = new Group()
meteorGroup = new Group()
meteroidGroup = new Group()


}

function draw() {



edges= createEdgeSprites();
rocket.collide(edges);



    if (space.y > 450) {
        space.y = height/2;
        }
        
        
        
        if(flagGroup.isTouching(rocket)){
        score = score+1
        
        
            }
        
        rocket.x = mouseX
       
        flagSpawn()
        asteroidsSpawn()
        cometSpawn()
        drawf_planetSpawn()
        meteorSpawn()
        meteroidSpawn()

        if(flagGroup.isTouching(rocket)){
            for(var i=0;i<flagGroup.length;i++){     
                //write a condition for zombiegroup touches bulletGroup
             if(flagGroup.isTouching(rocket)){
          //destroy zombie
                  flagGroup.destroyEach()
                 
                  } 
            
            }
          }
       
 if(asteroidsGroup.isTouching(rocket)||cometGroup.isTouching(rocket)||drawf_planetGroup.isTouching(rocket)||meteorGroup.isTouching(rocket)||meteroidGroup.isTouching(rocket)){
            gameState = END
         }
        

  if(score == 5){
  winner.visible = true
  space.velocityY = 0
  asteroidsGroup.destroyEach()
  drawf_planetGroup.destroyEach()
  cometGroup.destroyEach()
  meteorGroup.destroyEach()
  meteroidGroup.destroyEach()
  flagGroup.destroyEach()

  }



if(gameState == END){
         gameOver.visible = true
         space.velocityY=0
         rocket.destroy()
         asteroidsGroup.destroyEach()
         drawf_planetGroup.destroyEach()
         cometGroup.destroyEach()
         meteorGroup.destroyEach()
         meteroidGroup.destroyEach()
         flagGroup.destroyEach()
         
}

//The celestial obejects still move.

 
 if(mousePressedOver(reset)){
    window.location.reload()
 }


 



drawSprites();
textSize(15)
fill("red")
text("Flags Collected:"+score,370,490)
fill("yellow")
text("Collect 5 Flags To Win the Planet",10,30)
}


function flagSpawn(){

if (World.frameCount % 400 == 0) {
    var flag = createSprite(Math.round(random(50, 450),40, 30, 30));
    flag.addImage(flagImg);
    flag.scale=0.2;
    flag.velocityY = (4+score/1)
    flag.lifetime = 150;
    flagGroup.add(flag)
    }

}


function asteroidsSpawn(){

    if (World.frameCount % 80 == 0) {
        var asteroid = createSprite(Math.round(random(50, 450),40, 30, 30));
        asteroid.addImage(asteroids);
        asteroid.scale=0.2;
        asteroid.velocityY = (4+score/1)
        asteroid.lifetime = 150;
        asteroidsGroup.add(asteroid)
        }
}


function cometSpawn(){
    if (World.frameCount % 400 == 0) {
        var comet = createSprite(Math.round(random(50, 450),40, 30, 30));
        comet.addImage(comets);
        comet.scale=0.5;
        comet.velocityY = (4+score/1)
        comet.lifetime = 150;
        cometGroup.add(comet)
        }
    
}


function drawf_planetSpawn(){
    if (World.frameCount % 450 == 0) {
        var drawf_planet = createSprite(Math.round(random(50, 450),40, 30, 30));
        drawf_planet.addImage(drawf_planets);
        drawf_planet.scale=0.2;
        drawf_planet.velocityY = (4+score/1)
        drawf_planet.lifetime = 150;
        drawf_planetGroup.add(drawf_planet)
        }
    
}


function meteorSpawn(){
    if (World.frameCount % 300 == 0) {
        var meteor = createSprite(Math.round(random(50, 450),40, 30, 30));
        meteor.addImage(meteors);
        meteor.scale=0.3;
        meteor.velocityY = (4+score/1)
        meteor.lifetime = 150;
        meteorGroup.add(meteor)
        }
    
}


function meteroidSpawn(){
    if (World.frameCount % 250 == 0) {
        var meteroid = createSprite(Math.round(random(50, 450),40, 30, 30));
        meteroid.addImage(meteroids);
        meteroid.scale=0.2;
        meteroid.velocityY = (4+score/1)
        meteroid.lifetime = 150;
        meteroidGroup.add(meteroid)
        }
    
}