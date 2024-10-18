fetch(`http://localhost:3000/single_product`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
        document.getElementById("tb").innerHTML = view(res)


       




        // console.log(res.length);



    })
    .catch((er) => {
        console.log(er);

    })

// let k;
let m = 0;
function view(arr) {
    return arr.map((el, index) => {
      
        // let k= k+index
        // for ( k = arr.length-1; k <= arr.length; k++) {
    //   if(index )      

        // }
        // console.log(k);
        
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
            
            <td  class="aq" style="border: 1px solid black; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px; font-weight: bold;">
            <div class="ff">
            <button class="ddd" onclick="click1(${el.id},${el.quantity},'dd')">-</button>
            <input type="text"  value="${el.quantity}" disabled  id="vc" name="" id="" placeholder="dasd">
            <button class="ddd"  onclick="click1(${el.id},${el.quantity},'dd1')">+</button>
            </div>
            <td style="border: 1px solid black; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
            <button class="dl   w-[100px] h-[30px] text-[16px] 
            text-[white] rounded-[10px] mb-[3%] bg-[#FF7043]" onclick=" dd(${el.id})">DELATE</button> 
            </td>
            
            </td>
            <td>
           
            <p id="pro"   >  ${m = m + el.price} </p>
            </td>
            </tr>       
               
        
        
        `

    }).join("");
}
// console.log(k);






function showw(pr) {
    document.getElementById("totall").innerHTML = `${m}`

}


// let m =0




function click1(id, quantity, click, dell) {

    let a = quantity;
    if (click == 'dd1') {
        a = a + 1;
    }
    else if (click == 'dd') {
        a = a - 1
        if (a <= 0) {
            fetch(`http://localhost:3000/single_product/${id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    return res.json();
                })
        }

    }



    fetch(`http://localhost:3000/single_product/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ quantity: a })
    })
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res);
            document.getElementById("tb").innerHTML = view(res)


        })
        .catch((er) => {
            console.log(er);

        })














    console.log(id);
}
function dd(id) {
    fetch(`http://localhost:3000/single_product/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            return res.json();
        })
}
