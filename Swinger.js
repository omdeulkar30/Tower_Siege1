class Swinger{
    constructor(body1, body2){
var options={
    bodyA: body1, 
    bodyB: body2, 
    pointB: pointB, 
    stiffness: 0.312, 
    length: 12
}
this.pointB=this.pointB
this.swinger=Contraint.create(option)
World.add(world, this.swinger)
    }
display(){
    var pointA = this.swinger.bodyA.position
    var pointB = this.pointB
    strokeWeight(3)
    stroke("green ")
fill ("green")
line (pointA.x, pointA.y, pointB.x, pointB.y)
}
}