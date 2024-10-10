
  let name1= document.getElementById("in")

  let movv=document.getElementById("movv")
    let serr=document.getElementById("serr")
    let epii=document.getElementById("epii")


    

  let oo= document.getElementById("opc")


document.getElementById("opc").addEventListener("change",()=>{
    // console.log(movv.value);
    //  m=movv.value
    //  s=serr.value
    //  e=epii.value

    // console.log(oo.value);
    
    let tt=oo.value;
    let mov=name1.value;
    

     fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=${mov}&type=${tt}`)
    .then((r)=>{
        return r.json()
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("box").innerHTML=view(res.Search)


        
    })
    .catch((er)=>{
        console.log(er);
    })

    
})




document.getElementById("in").addEventListener("input",()=>{

    console.log(name1.value);
    let mov=name1.value;
    
 
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=${mov}`)
    .then((r)=>{
        return r.json()
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("box").innerHTML=view(res.Search)


        
    })
    .catch((er)=>{
        console.log(er);
    })
    
})


function view(arr){

    return arr.map((el)=>{
        return ` 
        <div id="op">
        <div id="igu">
        <img src="${el.Poster}" alt="">
        </div>

        <div id="her">
        <p>${el.Title}<p>
        </div>


        </div>
        
        `
    })

}







fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=tom and jerry`)
    .then((r)=>{
        return r.json()
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("box").innerHTML=view(res.Search)


        
    })
    .catch((er)=>{
        console.log(er);
    })
