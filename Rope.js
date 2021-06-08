class Rope{
    constructor(body1, body2,offsetX,offsetY){
        
        this.offsetX = offsetX
        this.offsetY = offsetY
        
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX , y: this.offsetY}
            
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var AnchorX1 = pointA.x;
        var AnchorY1 = pointA.y;

        var AnchorX2 = pointB.x+ this.offsetX;
        var AnchorY2 = pointB.y+ this.offsetY;
        
        line(AnchorX1,AnchorY1,AnchorX2,AnchorY2);

    }
    
}