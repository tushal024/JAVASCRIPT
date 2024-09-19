let a = document.querySelector("#signupForm")
let data = []



document.querySelector("#signup_bt").addEventListener("click", () => {
    document.getElementById("signupForm").style.display = "none"
    document.getElementById("loginForm").style.display = "block"
})

document.querySelector("#login_bt").addEventListener("click", () => {
    document.getElementById("signupForm").style.display = "block"
    document.getElementById("loginForm").style.display = "none"
})


a.addEventListener("submit", (t) => {
    t.preventDefault()


    let username = document.getElementById("signup_username").value
    let passWord = document.getElementById("passWord").value

    if (username.length <= 0 && ) {
        document.getElementById("u_e").innerHTML = `Enter Username...`;
    }
    if (passWord.length <= 0) {
        document.getElementById("p_e").innerHTML = `Enter Password...`;
    }
    let obj = {

        username: username,
        passWord: passWord

    }

    data.push(obj)

})
console.log(data);



let b = document.querySelector("#loginForm")
b.addEventListener("submit", (t) => {
    t.preventDefault()

    let l_user=document.getElementById("login_username").value
    let l_pass=document.getElementById("l_passWord").value

   let ans= data.filter(ele=>{
        if(ele.username==l_user && ele.passWord==l_pass){
            return ele;
        }
    })

    if(ans.length>0){
        alert("success.................")
    }
    else{
        alert("Unsuccess.................");
    }
   
})