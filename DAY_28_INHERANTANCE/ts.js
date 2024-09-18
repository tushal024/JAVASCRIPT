class my{
    constructor(a,b){
        this.a=a,
        this.b=b

    }
    
}

class my1 extends my{
    constructor(a,b,x){
        super(a,b),
        this.x=x

    }
}
console.log(new my1(1,2,3));
