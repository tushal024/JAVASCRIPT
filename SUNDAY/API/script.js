
document.querySelector("#sign").addEventListener("submit", (el) => {
    el.preventDefault();

    let email = document.getElementById("email_1").value
    let pass = document.getElementById("pass_1").value

    let obj = {

        e: email,
        p: pass
    }
    fetch(`http://localhost:3000/user_data`, {
        method: "POST",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify(obj)
    })

})

// console.log(obj);


document.querySelector("#log").addEventListener("submit", (el) => {
    el.preventDefault();


    let e1 = document.getElementById("email").value
    let p1 = document.getElementById("pass").value


    fetch(`http://localhost:3000/user_data`)
        .then((r) => {
            return r.json();
        })
        .then((scr) => {

            let ans = scr.filter((el) => {

                if (el.e == e1 && el.p == p1) {
                    return el;
                }
            })

            console.log(ans);
            if (ans.length > 0) {
                alert("SSSSSSSSSSSSSS")
            }
            else {
                alert("UNNNNNNNNNNNNN");
            }


        })
})