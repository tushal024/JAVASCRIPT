

let arr=[]

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value
    let des = document.getElementById("des").value
    let time = document.getElementById("time").value
    let id= document.getElementById("id").value

let obj={
    id:id,
    title:title,
    des:des,
    time:time

}
arr.push(obj)

document.getElementById("sub").addEventListener("click",()=>{

    postData(obj)
})


})



function postData(data){
    fetch(`http://localhost:3000/data`, {

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
    return data.map((el,index=1)=>{
        return `
        <tr>
        <td>${index}</td>

        <td>${el.title}</td>
        <td> ${el.des}</td>

        <td>${el.time}</td>
        <td>   <a href="single.html?id=${el.id}">  <button onclick="show()">VIEW</button>  </a>  </td>
</tr>
        `
    }).join("")
}



