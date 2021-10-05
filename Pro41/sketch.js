const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops, BruceUmbrella, maxDrops;
var thunder1, thunder2, thunder3, thunder4;
var thunder, thunderFrame;
thunderFrame=0;
var dropsArray = []

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
} 

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400, 647.2135955);

    maxDrops = 100;
    BruceUmbrella=new Umbrella(150, 420);
    if(frameCount%200==0){
        for(var i=0; i<maxDrops; i++){
            dropsArray.push(new Drops(random(0, 400), random(0, 647.21935955)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background("black");
    BruceUmbrella.display();
    if(frameCount%40==0){
        thunderFrame=frameCount
        var rand = Math.round(random(1, 4))
        thunder = createSprite(random(10, 350), random(10, 75), 20, 200);
        thunder.scale = random(0,1);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4)
            break;
            default:break;
    }
    }
    if(thunderFrame+10==frameCount && thunder){
        thunder.destroy();
    }
    for(var i=0; i<maxDrops; i++){
        dropsArray[i].display();
        dropsArray[i].update();
    }
    drawSprites();
}   

