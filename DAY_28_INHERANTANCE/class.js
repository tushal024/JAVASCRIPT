class a1{
    constructor(a,b,c,d){
        this.a=a,
        this.b=b,
        this.c=c,
        this.d=d
    }
    getval(){
        console.log(`${this.a} ${this.b}`);
        
    }


}

class a2 extends a1{
    constructor(a,b,x,y){
        super(a,b)
        this.x=x,
        this.y=y
    }
}


// let ans= new a2(1,2,3,4,5,6)
// console.log(ans);

console.log(new a2(1,2,3,4,5,6));



