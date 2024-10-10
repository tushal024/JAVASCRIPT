

function mm(){
    document.getElementById("bt").addEventListener("click", () => {
        let c = document.getElementById("city").value
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=6391c2edb2c7c1740d79c1eb29243b72`)
            .then((r) => {
                return r.json();
            })
            .then((res) => {
                console.log(res);
                document.getElementById("jan").innerHTML = view(res)
    
            })
            .catch((er) => {
                console.log(er);
            })
    })
}




function view(g){
    return `
    <div id="bb">
            <h2 id="cc">${g.name}</h2>
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

mm()