let s = document.querySelector("#signup")

let data = []

document.querySelector("#lb").addEventListener("click", () => {
    document.getElementById("signup").style.display = "none"
    document.getElementById("login").style.display = "block"
})


document.querySelector("#sb").addEventListener("click", () => {
    document.getElementById("signup").style.display = "block"
    document.getElementById("login").style.display = "none"
})


s.addEventListener("submit", (ele) => {
    ele.preventDefault()
    let name_1 = document.getElementById("name_1").value
    let pass_1 = document.getElementById("pass_1").value
    let e_rr=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;


    if(  e_rr.test(name_1) == false){
        document.getElementById("s_n").innerText=`Plese enter Username`
    }


    if(passwordregex.test(pass_1)== false){
        document.getElementById("s_p").innerText=`Plese enter Valid password`
    }
    let obj = {
        username: name_1,
        password: pass_1
    }

// data.push(obj)
      

   
console.log(data);
})






let l = document.querySelector("#login")

l.addEventListener("submit", (ele) => {
    ele.preventDefault()

    let name_2 = document.getElementById("name_2").value
    let pass_2 = document.getElementById("pass_2").value


    
    if(name_2.length<=0){
        document.getElementById("l_n").innerText=`Plese enter Username`
    }


    if(pass_2.length<=0){
        document.getElementById("l_p").innerText=`Plese enter password`
    }

    let ans = data.filter(ele => {
        if (ele.username == name_2 && ele.password == pass_2) {
            return ele;
        }
    })

    if (ans.length > 0) {
        // alert("login success...........")
        Swal.fire({
            title: "login success!",
            text: "You clicked the button!",
            icon: "success"
          });
    }
    else {
        // alert("unsuccess.............")
        Swal.fire({
            title: "login unsuccess!",
            text: "You clicked the button!",
            icon: "error"
          });
    }

})



function myFunction() {
    var x = document.getElementById("pass_1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



  function myFunction() {
    var x = document.getElementById("pass_2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }