
document.querySelector("#Register").addEventListener("submit", (ee) => {
    ee.preventDefault();

    

    let e = document.getElementById("e1").value
    let p1 = document.getElementById("p1").value

    const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    const passRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/;


// if(username.length == 0 ){
//       document.querySelector("#usernameText").innerText=" Enter username"
//       isvalid=false
//    }
   if(emailregex.test(e)==false){
      document.querySelector("#emailText").innerText="  email is unvalid"
      isvalid=false
   }
   if(passwordregex.test(p1)==false){
      document.querySelector("#passwordText").innerText=" password is unvalid"
      isvalid=false
   }







    let obj = {
        e,
        p1
    }
 
        
fetch(`https://render-js01-1.onrender.com/Register_Data`,{
    method : "POST",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify(obj)
})
.then((r) => {
    return r.json();
})
.then((res) => {
    // console.log(res);
    console.log(res);
    

    //    console.log(view(res));

})
.catch((err) => {
    console.log(err);

})

})

document.querySelector("#log").addEventListener("submit",(el)=>{
    el.preventDefault();

    let ee=document.getElementById("emm").value
    let pp=document.getElementById("pss").value

    fetch(`https://render-js01-1.onrender.com/Register_Data`)
.then((r) => {
    return r.json();
})
.then((res) => {


    function ss(arr){
        let ans= arr.filter((el)=>{
            if(pp==el.p1 && ee==el.e)
            {
                return el;
            }
        })
    
    
        if(ans.length>0){
            // alert("SUCCESS......")
            Swal.fire({
                title: "Log In Success...!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
        else{
            // alert("UNSUCCESS............")
            Swal.fire({
                icon: "error",
                title: "Log In Unsuccess...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
    
        }
    
    
    }

  ss(res)
  
    
})
.catch((err) => {
    console.log(err);

})



})

function view(arr) {

    return arr.map((el) => {
        return   `<h1>${el.p1}</h1>
            <h1>${el.e}</h1>
             `
    })

}

