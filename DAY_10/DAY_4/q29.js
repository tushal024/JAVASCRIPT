

var amount = 500, tax = 12 , tip = 18, service = 25, voucher = 50 , total;
var a = (amount * tax) /100;
var b = (amount * tip) /100;

total = (amount + a + b + service) - voucher;

console.log("Total bill amount is : ",total);