let b = document.querySelector("#signup_form")
let data = []

document.querySelector("#cl_1").addEventListener("click",()=>{
    document.getElementById("signup_form").style.display="block"
    document.getElementById("login_form").style.display="none"
})



document.querySelector("#cl_2").addEventListener("click",()=>{
    document.getElementById("login_form").style.display="block"
    document.getElementById("signup_form").style.display="none"
})


b.addEventListener("submit", (t) => {
    t.preventDefault()

    let email = document.getElementById("email_1").value
    let pass = document.getElementById("pass_1").value

    let obj = {
        email: email,
        pass: pass
    }

    data.push(obj)

  
})
console.log(data);



// let b = document.querySelector("#signup_form")

// b.addEventListener("submit", (t) => {
//     let email_s = document.getElementById("email_2").value
//     let pass_s = document.getElementById("pass_2").value

   
// })

document.querySelector("#login_form").addEventListener("submit",()=>{
    let email_s = document.getElementById("email_2").value
    let pass_s = document.getElementById("pass_2").value

    let ans=data.filter(ele =>{
        if(ele.email==email_s && ele.pass==pass_s){
          return ele
        }
      
    })

    console.log(ans);
    
    if(ans.length>0){
        alert("Login Success.......")
    }
    else{
        alert("Login unsuccessfull............")
    }

    
})