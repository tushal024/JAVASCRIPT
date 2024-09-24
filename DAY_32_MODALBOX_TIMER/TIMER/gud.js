num=4
num1=3
num2=2

let d;

do {
    document.getElementById("num2").innerHTML=` ${num2} :`
    document.getElementById("num1").innerHTML=` ${num1}  :` 
    document.getElementById("num").innerHTML=` ${num}  `
    
} while (false);
document.getElementById("start").addEventListener("click",()=>{
     d=setInterval(()=>{
         document.getElementById("num2").innerHTML=` ${num2} :`
        document.getElementById("num1").innerHTML=` ${num1}  :` 
        document.getElementById("num").innerHTML=` ${num}  `
        
        
        num--

        if(num1<=0 && num==0){
            num2--
            num1=3
        }
        if(num<0){
            num1--
            num=4
        }
        if(num==0 && num1==0 && num2==0){           
            clearInterval(d)          
        } 
        },1000)
        
})


document.getElementById("STOP").addEventListener("click",()=>{
    clearInterval(d)
})