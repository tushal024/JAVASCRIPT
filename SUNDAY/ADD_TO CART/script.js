fetch(`http://localhost:3000/product`)
    .then((r) => r.json())
    .then((res) => {
        console.log(res);

        document.getElementById("countainer").innerHTML = view(res)


    })
    .catch((er) => {
        console.log(er);

    })
function view(arr) {
    return arr.map((el) => {
        return `
         <a href="single.html?add=${el.id}">
            <div id="box">
                <img src="${el.img}" alt="">

                <p> ${el.price}</p>


            </div>
        </a>

        `
    }).join("")
}





let url = new URLSearchParams(window.location.search)
let id = url.get("add")
console.log(id);



fetch(`http://localhost:3000/product/${id}`)
    .then((r) => r.json())
    .then((res) => {
        // console.log(res);


        document.getElementById("box2").innerHTML = view1(res)

        console.log(res.id);
        document.getElementById("cart").addEventListener("click", () => {

            console.log(res[0].id);
            
            if(res.id == res[0].id )

            // if(res[0].id)
            



            

            postData(res)
        })


    })
    .catch((er) => {
        console.log(er);

    })



function view1(el) {

    return `
              <a href="single.html?add=${el.id}">
                 <div id="box">
                     <img src="${el.img}" alt="">
     
                     <p> ${el.price}</p>
     <button id="cart">ADD TO CART</button>
     
                 </div>
             </a>
     
             `

}


function concart(res){

    fetch(`http://localhost:3000/single${res[0].id}`)
    .then((r)=>{
        return r.json();
    })
    .then((res)=>{
        console.log(res);
        if(res.length>0){
            alert("no add.....................")
        }
        else{
            postData(res)
        }
        
    })
    .catch((er)=>{
        console.log(er);
        
        
    })
}



function postData(res) {
    fetch(`http://localhost:3000/single`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(res)
    })
        .then((r) => r.json())
        .then((res) => {
            console.log(res);
console.log(res[0].id);

            // if(res[0].id)
            // document.getElementById("countainer").innerHTML=view(res)


        })
        .catch((er) => {
            console.log(er);

        })

}