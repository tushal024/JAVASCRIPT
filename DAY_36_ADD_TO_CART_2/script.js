let arr= JSON.parse(localStorage.getItem("data")) || []

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


   arr.push(obj);
   localStorage.setItem("data",JSON.stringify(arr));

   document.getElementById("cart").innerHTML=show()
})


function show(){
   return arr.map(el =>{
      return `${el.img} -- ${el.title} -- ${el.price} <br>`
   })

}