

let arr=[]

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value
    let des = document.getElementById("des").value
    let time = document.getElementById("time").value

let obj={
    title:title,
    des:des,
    time:time

}
arr.push(obj)


document.getElementById("sub").addEventListener("click",()=>{
    
    postData(obj)

})



})



function postData(data,index){
    fetch(`http://localhost:3000/data?t=${index}`, {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((r)=>{
        return r.json();
    })
    .then((res)=>{
        console.log(res);
        
    })
    .catch((er)=>{
        console.log(er);
        
    })
}







fetch(`http://localhost:3000/data`)
.then((r)=>{
    return r.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("tbody").innerHTML=view(res)

    
})
.catch((er)=>{
    console.log(er);
    
})

function view(data){
    return data.map((el)=>{
        return `
        <tr>
        <td>${index}</td>

        <td>TO DO</td>
        <td> ${el.title}</td>

        <td>${el.time}</td>
         <td><button onclick="edit()">EDIT</button></td>
       <td><button onclick="delete1()">DELETE</button></td>
</tr>
        `
    }).join("")
}



function delete1(){
    fetch(`http://localhost:3000/data`,{
        method: "DELETE",
    })
    .then((r)=>{
        return r.json();
    })
    .then((res)=>{
        console.log(res);
        
    })
    .catch((er)=>{
        console.log(er);
        
    })

}





// function dd(id) {
//     fetch(`http://localhost:3000/single_product/${id}`, {
//         method: "DELETE",
//     })
//         .then((res) => {
//             return res.json();
//         })
// }
