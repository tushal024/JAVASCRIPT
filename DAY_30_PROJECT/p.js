
// document.getElementById("ann").innerText=`dhasjkdashdk`

class Account{
    constructor( accountNumber,  accountHolder,   balance){
        this.accountNumber=accountNumber,
        this.accountHolder=accountHolder,
        this.balance=balance

    }

    checkBalance(balance) {
        // return `current balance is : ${this.balance}`;
        console.log(`current balance is: ${this.balance}` );     
        document.querySelector("#a").addEventListener("click",()=>{
            document.getElementById("ann").innerHTML=`${this.balance }`
        })  
}


    deposit(amount){
        // return `Adds money to the balance : `
        // console.log(`Adds money to the balance is : ${d}`);
        
        document.querySelector("#a1").addEventListener("click",()=>{
           let ans = this.balance += amount
        document.getElementById("m").innerHTML=ans
       }) 
    
    }

    withdraw(amount){
        let a= this.balance-amount

        if(this.balance>amount){
             console.log(`After Withdrow Balance is: ${a}`);
             
        }
        else{
            console.log("NOT AMOUNT");
            
        }

        document.querySelector("#a2").addEventListener("click",()=>{
            // let ans = this.balance += amount
         document.getElementById("k").innerHTML= `After Withdrow Balance is: ${a}`
        }) 

    }
    
}


class ATM extends Account {
    constructor(accountNumber,  accountHolder,   balance){
        super(accountNumber,  accountHolder,   balance)

    }

    displayOptions(){}

}
let o= new Account(899111111111,"Tushal",100)
o.checkBalance();
o.deposit(90)

o.withdraw(50)









