class Plinko {
    constructor(x, y, r){
        var options ={
           isStatic:true
                    }

        this.r=10

        this.body = Bodies.circle(x, y, this.r,options)
        World.add(world, this.body);
    }
    display(){
        
        circle(0, 0, this.r,this.r)
    }
}