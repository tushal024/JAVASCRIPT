let product=JSON.parse(localStorage.getItem("data")) || []
// let aa= JSON.parse(localStorage.getItem("data"))
let a=document.getElementById("pr_form").addEventListener("submit",(el)=>{
    el.preventDefault();

    let img=document.getElementById("img").value
    let title=document.getElementById("title").value
    let price=document.getElementById("price").value
    let obj={
        img : img,
        title:title,
        price:price
    }
    product.push(obj);
    localStorage.setItem("data",JSON.stringify(product))
    document.getElementById("img").value=""
    document.getElementById("title").value=""
    document.getElementById("price").value=""


    // let ans=JSON.parse(localStorage.getItem("data"))
    // console.log(product);
    document.getElementById("card").innerHTML=show();
})

function show(){
return product.map((el,index)=>{
    return ` 
        <div style="width: 19%;  height: 400px;border-radius: 10px; margin-bottom: 10px;  border: 1px solid black;">
            <div style="width: 100%; height: 60%;"> <img style="width: 100%; border-radius: 10px; height: 100%;" src="${el.img}" alt=""></div>
            <div style="width: 100%; padding: 5px; height: 40%; padding-left: 2%;">
                <h2  style="text-decoration: underline; margin-top: 7px;">${el.title}</h2>
                <p style="font-size: 18px; font-weight: bold; margin-top: -7px;">$ ${el.price} /-</p>
                <p style="color: green;">Free Delhivery</p>
                <p style="background-color: rgb(206, 200, 200); padding: 3px; border-radius: 3px; display: inline-block; margin-top: -20px;">Top Discount Of The Sale</p>
                <button onclick="addd(${index})"  > Add To Cart</button>
            </div>
        </div>
       
       `
    
}).join("")

}

function dd(){
    document.getElementById("card").style.display='flex'
}
document.getElementById("add").innerHTML=cc()

// function cc(){
//     return product.map((el,index) =>{
//         return `${index} ==  ${el.img} == ${el.title} == ${el.price}`
//     }).join(" ")

// }



let cart=  JSON.parse(localStorage.getItem("cartt")) || []

function addd(index){
    cart.push( product(index))
    localStorage.setItem("cartt",JSON.stringify(cart))

}

document.getElementById("add").innerHTML=vieww()
function vieww(){
    return cartt.map((el,index)=>{
        return `${index} ==  ${el.img} == ${el.title} == ${el.price}  <button onclick="del()">DELATE</button>`

    }).join(" ")

}

function del(index){
    catt.splice(index,1)
    document.getElementById("add").innerHTML=vieww()

}