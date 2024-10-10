






document.getElementById("bt").addEventListener("click", ss)

function ss() {
    let ct = document.getElementById("city").value
    let ct1 = ""

    if (ct == "") {
        ct1 = "Rajkot"
    }
    else {
        ct1 = ct
    }



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ct1}&appid=6391c2edb2c7c1740d79c1eb29243b72&units=metric`)
    

    
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res);
            document.getElementById("box").innerHTML = view(res)
        })
        .catch((er) => {
            console.log(er);

        })
}

function view(g) {
    return `

<div id="bb">
<input type="text" name="" id="city" placeholder="   Enter City Name">
<button id="bt"  ><i class="fa-solid fa-magnifying-glass"></i></button>
<h2 id="cc">${ct1}</h2>
<h1>24 C <sup>.</sup> </h1>
<img src="http://openweathermap.org/img/w/${g.weather[0].icon}.png" alt="">

<div id="u"> 
<div id="g1">
<p>visibility</p>
</div>
<div id="g2">
${g.visibility}</div>
</div>
<div id="u1">
<div id="g1">
<p>wind Speed</p>
</div>
<div id="g2">${g.wind.speed}</div>
</div>
<div id="u2">
<div id="g1">description</div>
<div id="g2">${g.weather[0].description}</div>
</div>
</div>
`
}


ss()






