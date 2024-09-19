
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
         
}


    deposit(amount){
        // return `Adds money to the balance : `
        // console.log(`Adds money to the balance is : ${d}`);
        
        let ans = this.balance += amount
        console.log(ans);
        
    
    }

    withdraw(amount){
        let a= this.balance-amount

        if(this.balance>amount){
             console.log(`After Withdrow Balance is: ${a}`);
             
             
        }
        else{
            console.log("NOT AMOUNT");
            
        }

       
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
o.deposit(10)

o.withdraw(50)









