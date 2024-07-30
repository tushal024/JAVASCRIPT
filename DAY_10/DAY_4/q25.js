
let amount = 200, service = 20 , tip = 15, tax = 25 , a=0;

let tax1 =  (amount * tax) /100;
let tip1 =  (amount * tip) /100;


 
a = amount + service + tip1 + tax1;

console.log("Total bill amount is : ",a);