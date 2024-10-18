fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e7589c6e`)
.then((r)=> r.json())
.then((res)=>{
    console.log(res);
    
})