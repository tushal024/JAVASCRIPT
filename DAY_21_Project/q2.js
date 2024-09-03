let arr=[1,3,4,8]

function d_num(a){
    return a.filter((el)=>{
            return el%2==0;
    })
}
console.log(d_num(arr));
