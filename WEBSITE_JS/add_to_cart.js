fetch(`http://localhost:3000/single_product`)
.then((r)=>{
    return r.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("tb").innerHTML=view(res)

    
})
.catch((er)=>{
    console.log(er);
    
})



function view(arr){
    return arr.map((el)=>{
        return ` 
         <tr>
            <td class="tdd"  style="   border: 1px solid black; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
              <img src="${el.img}" alt="">
            </td>
            <td style="border: 1px solid black; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
               <p class="mb-[10px]"> ${el.dis}</p>
            </td>
            <td style="  font-weight: bold; border: 1px solid black; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
           $${el.price}/-
            </td>

            <td style="border: 1px solid black; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
            <button class="dl   w-[100px] h-[30px] text-[16px] 
            text-[white] rounded-[10px] mb-[3%] bg-[#FF7043]" onclick=" dd(${el.id})">DELATE</button> </td>

 


        </tr>        
        `
    }).join("");
}

function dd(id){
    fetch(`http://localhost:3000/single_product/${id}`,{
        method:"DELETE",
    })
    .then((res)=>{
        return res.json();
    })
}