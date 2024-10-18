
document.getElementById("signup").addEventListener("submit", (e) => {
    e.preventDefault();


    let n1 = document.getElementById("n1").value
    let p1 = document.getElementById("p1").value


    let obj = {
        n1: n1,
        p1: p1
    }
    console.log(obj);


    postData(obj)
    // postDatan

})


function postData(move) {
    fetch(`http://localhost:3000/data`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(move)

    })
        .then((el) => {
            return el.json();
        })
        .then((res) => {
            console.log(res);

        })
        .catch((er) => {
            console.log((er));
        })




}




// login...............................................
document.getElementById("log").addEventListener("submit", (e) => {
    e.preventDefault();


    let n2 = document.getElementById("n2").value
    let p2 = document.getElementById("p2").value

    fetch(`http://localhost:3000/data`)
        .then((el) => {
            return el.json();
        })


        .then((res) => {

            console.log(res);

            // console.log(res[0].n1);

            let ans = res.map((el) => {

                // console.log(el.p1);
                if (n2 == el.n1 && p2 == el.p1) {
                    return "hello";
                }


            })
            console.log(ans);
            
       

            let tu = 0
            for (let x = 0; x < ans.length; x++) {
                if (ans[x] == "hello") {
                    tu = 24

                }
                else {
                }



            }

            if (tu == 24) {
                alert("success")
            }
            else {
                alert("nooooooooooooo")

            }
            // console.log(ans);

            // let op = ans[0] == "hello"
            // console.log(op);


            // if (op==true) {
            // }
            // else {
            // }
            // console.log();






        })
        .catch((er) => {
            console.log((er));
        })


})

