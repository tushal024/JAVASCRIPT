let arr=[2,5,24,32]
function areAllPositive(a){

    let ans=a.every((ele)=>{
        return ele>0
    })
    console.log(ans);
    
}

areAllPositive(arr)