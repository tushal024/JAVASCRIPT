fetch(`http://localhost:3000/data`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
        // document.getElementById("box").innerHTML=res[0].name
        document.getElementById("bt").addEventListener("click", () => {
            ss(res[0])
        })

    })
    .catch((er) => {
        console.log(er);

    })


function ss(dd) {

    (fetch(`http://localhost:3000/neww`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(dd)

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


    )
}














fetch(`http://localhost:3000/neww`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
        //    document.getElementById("box").innerHTML=res
        document.getElementById("box").innerHTML = res[0][0].name

    })
    .catch((er) => {
        console.log(er);

    })
