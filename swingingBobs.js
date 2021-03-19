class SwingingBobs{
    constructor(x, y, r){

    
    var options={
        restitution:0.9, 
        friction:5, 
    }
this.body=Bodies.circle(x, y, r/2, options)
this.r=r
World.add(world, this.body)
}
display(){
    var angle = this.body.angle
    push()
    translate (this.body.position.x, this.body.position.y)
    rotate(angle)
    ellipseMode(CENTER)
    strokeWeight(3)
    stroke("red")
    fill("blue")
    ellipse(0, 0 ,this.r, this.r)
    pop()
}
}