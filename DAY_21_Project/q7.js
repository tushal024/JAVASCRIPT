let arr=[24,29,77,12]
function hasAnyEvenNumber(a){

    let ans=a.some((ele)=>{
        return ele%2==0
    })
    console.log(ans);
    
}

hasAnyEvenNumber(arr)