
function movie(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
        method: 'GET',
        headers: {
            "content-type": 'application/json',
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmZhMmIyZDA4YmQwNjU0MjYwNjM4ZDE5N2I1MGZmNCIsIm5iZiI6MTcyODQ2NzE1My40ODk1NDYsInN1YiI6IjY3MDY0ZTgyMDAzYzkyMTRhMGIzYWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OxN4nOEwuM7YBGRxo5Hx0UwuGvJzRKKNeAexYUzsSuk'
    
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((r) => {
            console.log(r);
            console.log(r.results.length);
    
            console.log(typeof (r));
    
            document.getElementById("v").innerHTML = view(r.results)
            // document.getElementById("te").innerHTML = view1(r)
    
        })
        .catch((er) => {
            console.log(er);
    
        })
}




function view(arr) {

    return arr.map((el)=>{
        return `

        <div id="box1">
                <div id="im">
                 <img src="https://image.tmdb.org/t/p/original${el.backdrop_path}" width="500px"> 

                </div>
                <div id="te">
                <p>${el.original_title}</p>

                <p>   ${el.release_date}</p>

                </div>

            </div>

       `
   
    }).join("") 

   
}

movie();





