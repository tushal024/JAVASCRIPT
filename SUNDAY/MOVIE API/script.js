function fetchData(movieName="money",idName="slo"){
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=${movieName}`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
       

        document.getElementById(idName).innerHTML = view(res.Search)

    })
    .catch((er) => {
        console.log(er);

    })

}

fetchData("money")
fetchData("money","cc")
fetchData("tiger","super")
fetchData("fight","super1")
fetchData("cartoon","super2")


function view(arr){
    return arr.map((e,index=1)=>{
        return`

            <a href="single_page.html?id=${index}" id="un"  onclick="un()"> <img src="${e.Poster}" class="sl_i" id="un">  </a> `

    }).join("")

}



// single___page.......................................................


let data = new URLSearchParams(window.location.search)

let idu = data.get("id")

let movieName = "money"


fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=money&id=${idu}`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res.Search[idu]);
        document.getElementById("tun").innerHTML=view1(res.Search[idu])
      
    })
    .catch((er) => {
        console.log(er);

    })




function view1(el) {

return `  <img src="${el.Poster}" >   <h1>${el.Title}</h1>`

   
}






