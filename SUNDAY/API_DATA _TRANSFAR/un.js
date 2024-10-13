function fetchData(){
    fetch(`http://localhost:3000/product`)
    .then((r)=>{
        return r.json()
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("box").innerHTML=view(res)
    })
    .catch((er)=>{
        console.log(er);
        
    })
}




fetchData()

function view(arr){
    return arr.map((e,index)=>{
        return `  <a href="single.html?id=${index}" id="one"> <img src="${e.img}">  </a>`
    })
}



let data =new URLSearchParams(window.location.search)

let dd = data.get("id") 
console.log(dd);

fetch(`http://localhost:3000/product?id=${dd}`)
.then((r)=>{
    return r.json()
})
.then((res)=>{
    console.log(res);
    document.getElementById("box2").innerHTML=`  <img src="${res[0].img}">  `
       
    // ..............................................



    fetch(`http://localhost:3000/single_product`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(res[0])
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





// ........................................................














})
.catch((er)=>{
    console.log(er);
    
})