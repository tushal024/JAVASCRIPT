var a = document.querySelector("#Register")
let add = [] ;
let isValid = false;

const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    // const passRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/;

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    

document.querySelector("#loginPage").addEventListener("submit",(ele)=>{

  ele.preventDefault()

  let loginMail = document.querySelector("#emm").value
  let loginPassword = document.querySelector("#pss").value

  document.querySelector("#EmailloginText").innerText = "" 
  document.querySelector("#PasswrdloginText").innerText = ""

  let loginValid = true

  // if(emailRegex.test(mail) == false){
  //   document.getElementById("Email").innerText = "Please enter your mail ID!!"
  //   document.getElementById("Email").style = "color : orange"
  //   isValid = false;
  // }
  

  if (loginMail.length == 0  || emailRegex.test(loginMail) == false) {
    document.querySelector("#EmailloginText").innerText = "Please Enter valid email";
    document.getElementById("EmailloginText").style = "color :  orange"
    loginValid = false;

  }
  if (loginPassword.length < 8 || passRegex.test(loginPassword) == false) {
    document.querySelector("#PasswrdloginText").innerText = "Plase Enter password";
    document.getElementById("PasswrdloginText").style = "color :  orange"
    loginValid = false;

  }


  if(loginValid == true){
    let ans = add.filter((element)=>{
      if(element.Email == loginMail && element.Password == loginPassword )
      {
        return element;
      }
    });

    if (ans.length > 0) {
      alert("Login successfull");
    } else {
      alert("Login Unsuccessfull");
    }

  }

})

//   document.querySelector("#swap1").addEventListener("click", () => {
//   document.querySelector("#loginPage").style.display = "block";
//   document.querySelector("#singupPage").style.display = "none";
// })

//   document.querySelector("#swap2").addEventListener("click", () => {
//   document.querySelector("#loginPage").style.display = "none";
//   document.querySelector("#singupPage").style.display = "block";
// });





// --------------------

  a.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let username = document.querySelector("#user").value 
    let mail = document.querySelector("#e1").value 
    let passw = document.querySelector("#p1").value 
    
    document.getElementById("userText").innerText = ""
    document.getElementById("Email").innerText = ""    
    document.getElementById("Passwrd").innerText = ""

   if(username.length == 0 ){
      document.getElementById("userText").innerText = "Please enter your user name!!"
      document.getElementById("userText").style = "color :  orange"
      isValid = false;
    }
    if(emailRegex.test(mail) == false){
      document.getElementById("Email").innerText = "Please enter your mail ID!!"
      document.getElementById("Email").style = "color : orange"
      isValid = false;
    }
    if(passRegex.test(passw) == false){
      document.getElementById("Passwrd").innerText = "Creat unique password!!"
      document.getElementById("Passwrd").style = "color : orange"
      isValid = false;
    }

    let obj = {
      UserName : username,
      Email : mail,
      Password : passw
    }

    
   

    if(isValid == true){
      add.push(obj)  
    }
    // else{
    //   alert("valid pass")
    // }

    
    console.log(add);
    
  })