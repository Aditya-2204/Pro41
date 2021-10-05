class Umbrella{
    constructor(x, y){
        var options={
            'isStatic':true
        }
        this.body = Bodies.circle(x, y, 70, options);
        this.radius=70;
        this.walking = loadImage("walking_1.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.walking, this.body.position.x, this.body.position.y+20, 200, 200);
        pop();
    }
}