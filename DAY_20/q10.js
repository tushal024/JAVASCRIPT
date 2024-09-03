let arr= [{name: 'Shirt', price: 30}, {name: 'Shoes', price: 60}, {name: 'Hat', price: 25}]

let ans=arr.findIndex((ele,ind)=>{
    return ele.price>50
    
})
console.log(ans);


