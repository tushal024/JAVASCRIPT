
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
    return data.map((el,index)=>{
        return `
        <tr>
        <td>${index}</td>

        <td>TO DO</td>
        <td> ${el.title}</td>

        <td>${el.time}</td>
         <td><button onclick="edit()">EDIT</button></td>
       <td><button onclick="delete1(${index})">DELETE</button></td>
</tr>
        `
    }).join("")
}