let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]


let ans=arr.filter((ele,ind)=>{
    return ele%2!=0;
})
console.log(ans);
let rr=ans.map((ele,ind)=>{
    return ele*ele
})
console.log(rr)





