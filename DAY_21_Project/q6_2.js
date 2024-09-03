let arr=['SHAMBHU','SHIV','RUDRA','MAHESH']
function areAllStringsLong(a){

    let ans=a.every((ele)=>{
        return ele.length>5
    })
    console.log(ans);
    
}

areAllStringsLong(arr)