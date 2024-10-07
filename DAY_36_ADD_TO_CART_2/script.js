let cart=[]
let product= JSON.parse(localStorage.getItem("data")) || []

document.querySelector("#form").addEventListener("submit",(el)=>{
   el.preventDefault();

   let i =document.getElementById("img").value
   let t  =document.getElementById("title").value
   let p=document.getElementById("price").value


   let obj={
   img:i,
   title:t,
   price:p
   }


   product.push(obj);
   localStorage.setItem("data",JSON.stringify(product));


    let result = JSON.parse(localStorage.getItem("data"))
   document.getElementById("cart").innerHTML=show()

})

document.getElementById("cart").innerHTML=show()

function show(){
   return product.map((el,index) =>{
      return `<img src="${el.img}">  <br>
         ${el.title} <br> 
         ${el.price} <br>
         <button onClick="add(${index})">ADD TO CART</button>
         `
   }).join(" ")

}
function add(index){
   cart.push(product[index])
   localStorage.setItem("cart",JSON.stringify(cart))
}