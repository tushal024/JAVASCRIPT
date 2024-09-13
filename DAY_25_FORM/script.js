let a=document.querySelector("form")

a.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username=document.getElementById("Username").value
    
    let Email=document.getElementById("Email").value
    
    let password=document.getElementById("pass").value
    
if(username.length ==0){
    document.querySelector("#Username").innerHTML=`plese`;
}

    let obj={
        username :username,
        Email:Email,
        password:password
    }
// console.log(obj);

document.getElementById("ans").innerHTML=`${obj}`
})











