let url = new URLSearchParams(window.location.search)
let idd = url.get("id")
console.log(idd);




fetch(`http://localhost:3000/data/${idd}`)
.then((r)=>{
    return r.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("box1").innerHTML=view1(res)

})
.catch((er)=>{
    console.log(er);
    
})

function view1(data){

    return `
   
    <h1>${data.title}</h1>
        <p> ${data.des}</p>
        <p>${data.time}</p>
        <button onclick="dd(${data.id})" id="dd">DELETE</button>
        <button onclick="edit()">EDIT</button>
     
        `
}





function dd(id) {
    fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            document.getElementById("box1").innerHTML=view1(res)

            
        })
        .catch((er)=>{
            console.log(er);
            
        })
}
