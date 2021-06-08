class Bob {

    constructor(x,y,r){
     var options={
         isStatic: false,
         restitution: 0.9,
         friction:1,
         density:1.2
     }
     
     this.x = x;
     this.y = y;
     this.r = r;
     this.body = Bodies.circle(x,y,r,options);
     World.add(world,this.body);


    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("#6600CC");
        fill("#66FFFF");
        ellipse(0,0, 100,100);
        pop();
    }
}