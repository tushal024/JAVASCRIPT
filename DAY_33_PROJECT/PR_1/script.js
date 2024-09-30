let a;
function start() {
    let hour = document.getElementById("num2");
    let min = document.getElementById("num1");

    let sec = document.getElementById("num");
    let oo = document.getElementById("oo");
    a = setInterval(() => {
        let date = new Date();


        // let newformat = hour >= 12 ? '  PM' : '  AM';
        // hour.innerHTML = date.getHours() - 12
        // min.innerHTML = date.getMinutes()
        // sec.innerHTML = date.getSeconds()
        // oo.innerHTML = `   ${newformat}`
        // oo.style.marginLeft = "20px"
         let h= String(date.getHours()).padStart(2,"0");
         let m= String(date.getMinutes()).padStart(2,"0");
         let s= String(date.getSeconds()).padStart(2,"0");
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




// const currentDate = new Date();
// const currentTime = currentDate.toLocaleTimeString([],
//     { hour: 'numeric', minute: 'numeric', hour12: true });

