class Can{
    constructor(x, y, width, height){ 
        options{
            restitution: 0,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(350, 350, 25, 75);
        pop();
    }
}
