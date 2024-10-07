let a=document.querySelector("form")

a.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username=document.getElementById("Username").value
    
    let Email=document.getElementById("Email").value
    
    let password=document.getElementById("pass").value
    


    let obj={
        username :username,
        Email:Email,
        password:password
    }
// console.log(obj);

document.getElementById("ans").innerHTML=`${obj}`
})











