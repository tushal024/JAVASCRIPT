// PRODUCT PAGE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function fetchData() {

    fetch(`http://localhost:3000/data`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res);
            document.getElementById("box").innerHTML = view(res)

        })
        .catch((er) => {
            console.log(er);

        })
}
fetchData()


function view(el) {
    return el.map((el) => {
        return `
        <div>
    <a href="single.html?id=${el.id}" id="click"> 
    <img src="${el.img}"> 
    </a>
    <p>${el.dis}</p>
          </div>
        `
    }).join("")
}



// SINGLE PAGE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



let data = new URLSearchParams(window.location.search)
let id = data.get("id")
console.log(id);



fetch(`http://localhost:3000/data/${id}`)
    .then((r) => {
        return r.json()
    })
    .then((res) => {
        document.getElementById("box1").innerHTML = view1(res)
        console.log(res);
        document.getElementById("add").addEventListener("click",()=>{
            cart(res)
        })

       
        // document.getElementById("box1").innerHTML =     

    })
    .catch((er) => {
        console.log(er);

    })

function view1(el) {
    return `
            <div>
        <a href="single.html?id=${el.id}" id="click"> 
        <img src="${el.img}"> 
        </a>
        <p>${el.dis}</p>
            <br>
          <button id="add"  >ADD TO CART</button>
              </div>



            `
}


function cart(res){

    fetch(`http://localhost:3000/single`,{
        method:"POST",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(res)

    })
    .then((r) => {
        return r.json()
    })
    .then((res) => {
        console.log(res);
        // document.getElementById("box1").innerHTML = view1(res)
       
        // document.getElementById("box1").innerHTML =     

    })
    .catch((er) => {
        console.log(er);

    })

}







fetch(`http://localhost:3000/single`)
.then((r) => {
    return r.json()
})
.then((res) => {
    console.log(res);
    document.getElementById("box2").innerHTML = view(res)

})
.catch((er) => {
    console.log(er);

})

