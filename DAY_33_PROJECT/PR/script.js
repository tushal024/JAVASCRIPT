let a;
function start() {
    let hour = document.getElementById("num2");
    let min = document.getElementById("num1");

    let sec = document.getElementById("num");
    let oo = document.getElementById("oo");
    a = setInterval(() => {
        let date = new Date();
         let h=String(date.getHours()).padStart(2,"00")
         let m=date.getMinutes()
         let s=date.getSeconds()
         let tt="AM";
         if(h>12){
            h -=12;
            tt="PM";
         }
         
         document.getElementById("num2").innerHTML=h;
         document.getElementById("num1").innerHTML=m;
         document.getElementById("num").innerHTML=s;
         document.getElementById("oo").innerHTML=tt;



    }, 1000)
}
function stop() {
    clearInterval(a)
}


