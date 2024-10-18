let arr=["https://i.pinimg.com/736x/fd/89/cc/fd89cce0b421b6b4d37959ffc4422efc.jpg",
    "https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
   "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg",
   "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-spring-summer-day-in-green-nature-mountains-free-image.jpg?w=600&quality=80",
   "https://c4.wallpaperflare.com/wallpaper/758/323/699/nature-scenery-beautiful-mountain-wallpaper-wallpaper-preview.jpg",

   "https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg"

]


let x=0;

function prev(){

    setInterval(()=>{
        document.getElementById("box").innerHTML=`<img src="${arr[x]}" height="100%" width="100%" > `
        document.getElementById("box").style=`  border-radius: 20px;`
    
      x++
    if(x== arr.length){
        x=0
    }
    },1000)
    
    
   

}
function next(){
    


setInterval(()=>{
    x--;
    if(x<0){
        x=arr.length-1
        // x=arr.length
    }

    document.getElementById("box").innerHTML=`<img src="${arr[x]}"  height="100%" width="100%" > `
    document.getElementById("box").style=`  border-radius: 20px;`

})


   
   
}
document.getElementByIde((prev()))