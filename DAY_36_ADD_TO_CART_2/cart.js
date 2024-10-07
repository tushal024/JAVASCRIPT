let cart =JSON.parse(localStorage.getItem("cart")) || []

document.getElementById("add").innerHTML=view()

function view(){
    return cart.map((el,index)=>{
        return `<img src="${el.img}">  <br>
        <h3>${el.title}</h3>
        <p>${el.price}</p>


        <button onclick="delate(${index})">DELATE</button>
        `
    }).join(" ")
}



function delate(index){
    cart.splice(index,1)
    document.getElementById("add").innerHTML=view()
}


