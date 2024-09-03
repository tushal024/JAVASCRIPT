let arr=[10, 20, 30, 150, 60]

let ans=arr.some((ele,ind)=>{
    if(ele>100){
        return ele;
    }
})
console.log(ans);
