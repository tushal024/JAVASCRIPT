


let arr = []


// signup...............................................................................

document.getElementById("signup").addEventListener("submit", (t) => {
    t.preventDefault();

    let a = document.getElementById("name").value
    let b = document.getElementById("pas").value

    let obj = {
        namee: a,
        pass: b

    }


    arr.push(obj)
})








// login...............................................................................

document.getElementById("log").addEventListener("submit", (a) => {
    a.preventDefault();

    let a1 = document.getElementById("name1").value
    // console.log(a1);

    let b2 = document.getElementById("pass1").value


    let ans = arr.filter(el => {


        if (a1 == el.namee && b2 == el.pass) {
            return el;

        }


    })



    console.log(ans.length);
    if (ans.length > 0) {
        alert("SUCCESS LOGIN.................")

    }
    else {
        alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOO")

    }

})


