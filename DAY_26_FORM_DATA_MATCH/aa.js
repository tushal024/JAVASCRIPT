let a = document.querySelector("#sin")
let data = []
a.addEventListener("submit", (ele) => {
    ele.preventDefault();

    let n = document.getElementById("n1").value
    let p = document.getElementById("p1").value


    let obj = {
        n: n,
        p: p
    }

    data.push(obj)

})

let b = document.querySelector("#log")

b.addEventListener("submit", (ele) => {
    ele.preventDefault();

    let nn = document.getElementById("n2").value
    let pp = document.getElementById("p2").value

    let ans = data.filter((ele) => {
        if (ele.n == nn && ele.p == pp) {
            return ele
        }
    })


    if (ans.length > 0) {
        alert("SUCCESS............")
    }
    else {
        alert("UNSUCCESS.............")
    }

})
