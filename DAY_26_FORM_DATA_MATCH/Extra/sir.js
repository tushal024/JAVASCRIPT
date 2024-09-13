// getElementById()
let d = document.querySelector("#signupForm")
let data = []



document.querySelector("#swapButton").addEventListener("click",()=>{
   document.querySelector("#SignupMain").style.display = "block"
   document.querySelector("#LoginMain").style.display = "none"
})
document.querySelector("#signupSwapButton").addEventListener("click",()=>{
  document.querySelector("#SignupMain").style.display = "none"
  document.querySelector("#LoginMain").style.display = "block"
})


d.addEventListener("submit", (e)=>{
    e.preventDefault()
   
    let email  = document.querySelector("#email").value
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
   
    let obj = {
      emailID : email,
      Username : username,
      Pass : password,
    }

  
      data.push(obj)
    
   console.log(data)
})


document.querySelector("#loginForm").addEventListener("submit",(ddd)=>{
       ddd.preventDefault()
      
       let loginEmail = document.getElementById("loginEmail").value
       let loginPassword = document.getElementById("loginPassword").value

       let ans = data.filter(element => {
          if(element.emailID == loginEmail && element.Pass == loginPassword){
              return element
          }
       }); 
       console.log(ans)
       if(ans.length > 0){
        alert("Login Successfull")
       }else{
        alert("Login Unsuccessfull")
       }
})