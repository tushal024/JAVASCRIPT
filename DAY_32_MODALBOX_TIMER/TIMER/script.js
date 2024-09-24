
num=5
num1=1
num2=2



do {
    document.getElementById("num2").innerHTML=`       0${num2}  : `
    document.getElementById("num1").innerHTML=`  0${num1}  :      `
document.getElementById("num").innerHTML=`       0${num}  `
         
} while (false);



let d;

document.getElementById("start").addEventListener("click",()=>{
     d=setInterval(()=>{
          document.getElementById("num2").innerHTML=`       0${num2}   :`
          document.getElementById("num1").innerHTML=`  0${num1}  :      `
          document.getElementById("num").innerHTML=`       0${num}   `
        num--


        if(num2<=0 && num1<=0 && num<=0){
            clearInterval(d)
        }

        // if(num2<=0 ){
        //     num2=0
        // }

        if(num2==0){
            if(num1==0){
                if(num==0){
                    clearInterval(d)
                }
            }
        }
if(num1==0){
    num2=0
    // clearInterval(d);

}
// if(num2<=0){
//     num2=0
//     num1=0
//     num=0
//     clearInterval(d)

// }
        
        if(num<=0){
            num1--
            // if(num1==0 ){
            // document.getElementById("num").innerHTML=``
            // num1=2
            // }
            // document.getElementById("num1").innerHTML=`${num1}`
        }
    
       if(num1<0){
        num2--
        num1=3
       }
        
        if(num<0)
        {
            // clearInterval(d)
            num=5
        }


        },1000)



        // document.getElementById("STOP").addEventListener("click",()=>{
        //     clearInterval(d)
        // })

       
})



function chintan(){
    // clearInterval(d)
    document.getElementById("STOP").addEventListener("click",()=>{
        clearInterval(d)
    })

}

