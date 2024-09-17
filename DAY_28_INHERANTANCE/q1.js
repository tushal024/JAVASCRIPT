class structor{
    constructor(a,b,c,d){
        this.a=a
        this.b=b
        this.c=c
        this.d=d   
    }
    getval(){
        console.log(`${this.a}  `);
    }
}
class A1  extends structor{
    constructor(a,x,y){
        super(a)
        this.x=x
        this.y=y
        // this.z=z
    }
    getval(){
        // console.log(`${a} - ${b} - ${c} - ${x}`);        
    }
}

let op1= new A1("T","M","A","Jigu","Krupa","manav")
console.log(op1);




// class B1 extends A1{
//     constructor(a,b,z,t){
//         super(a,b,z)
//         this.t=t
//     }
// }

// let op =new B1()
// console.log(op);


// let x= new structor(24,22,12,34)
// console.log(x);

// let y=new A1 (14,13,12,12,13)
// console.log(y);











