function st(){
    let a=document.getElementById("num").value

    if(a%2==0){
        document.getElementById("ans").innerHTML=`POSITIVE NUMBER`;
    }
    else if(a==0){
        document.getElementById("ans").innerHTML=`NUMBER IS ZIRO`;
    }
    else{
        document.getElementById("ans").innerHTML=`NEGATIVE NUMBER`;
    }
}