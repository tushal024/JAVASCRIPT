let data = new URLSearchParams(window.location.search)

let idd = data.get("id")
let movieName = "money"


fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e&s=movie&id=${idd}`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
        document.getElementById("sig").innerHTML=view(res.Search)
        document.getElementById("un").addEventListener("click",()=>{
            fData(res)
        })


        // document.getElementById("cc").innerHTML = view(res.Search)


        // document.getElementById(idName).innerHTML = view(res.Search)

    })
    .catch((er) => {
        console.log(er);

    })
// console.log(idd);


function fData(res) {

    fetch(`http://localhost:3000/single?id=${res[0].id}`)
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res);
            if (res.length > 0) {
                alert("nooooooooooooo")
            }
            else {
                fetch(`http://localhost:3000/single`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: res[0]
                })


                    .catch((er) => {
                        console.log(er);

                    })


            }

        })
        .catch((er) => {
            console.log(er);

        })
}



function view(arr) {
    return arr.map((el) => {
        return `<p>${el.Title
            }</p>`
    })
}