function double(num){

    return num*2;

}
function square(num){

    return num* num
}

function doubleSquare(num){

    let a=double(num);
    let b=square(a);

    return b;
    

}

console.log(doubleSquare(3))
