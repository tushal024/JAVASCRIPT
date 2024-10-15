function fetchData(movieName = "money", idName = "slo") {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=${movieName}`)
        .then((r) => {
            return r.json();
        })
        .then((res) => {


            document.getElementById(idName).innerHTML = view(res.Search)
            document.getElementById("un2").addEventListener("click", () => {
                fetch(`http://localhost:3000/single`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(res[0])
                })
            })
                .then((r) => {
                    return r.json();
                })
                .then((res) => {
                    console.log(res);


                })
                .catch((er) => {
                    console.log(er);

                })

        })
        .catch((er) => {
            console.log(er);

        })

}

fetchData("money")
fetchData("money", "cc")
fetchData("tiger", "super")
fetchData("fight", "super1")
fetchData("cartoon", "super2")


function view(arr) {
    return arr.map((e, index = 1) => {
        return `

            <a href="single_page.html?id=${index}&movie=${e.imdbID}" id="un1"  onclick="un()"> <img src="${e.Poster}" class="sl_i" id="un2">  </a> `

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
        document.getElementById("imm").innerHTML = view1(res.Search[idu])
        document.getElementById("tun").innerHTML = view2(res.Search[idu])

    })
    .catch((er) => {
        console.log(er);

    })




function view1(el) {

    return `  <img src="${el.Poster}" >   `


}

function view2(el) {
    return `<h1>${el.Title}</h1>
   
    <p class="year">Year - ${el.Year}</p>
   

    <button class="watch"> <i class="fa-solid fa-play ic"></i>   Watch</button>
    `
}




