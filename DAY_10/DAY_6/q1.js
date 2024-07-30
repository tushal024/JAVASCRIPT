
// Q1

function ii(){
    let num =document.getElementById("value").value

    if(num>0){
        // document.write("number is positive");
        // document.innerHTML=`<h1>number is positive</h1>`
        // alert(`${value} is positive`)
        document.getElementById("tu").innerHTML=("Number is Positive");
  }
     else if(num==0){
        // document.write("number is zero");
        // document.innerHTML=`<h1>number is positive</h1>`
        // alert(`${value} is ziro`)
        document.getElementById("tu").innerHTML=("Number is Ziro");
    } 
    else{
        // document.innerHTML=`<h1>number is positive</h1>`
        // alert(`${value} is negative`)
        document.getElementById("tu").innerHTML=("Number is Negative");
        // document.write("number is negative");
    }
}

// .........................................

// q2


function iit(){
    let uk = document.getElementById("intt").value

    if(uk>=90 && uk<=100){
        document.getElementById("sh").innerHTML=("A");
    }
    else if(uk >80 && uk<=90){
        document.getElementById("sh").innerHTML=("B");
    }
    else if(uk >70 && uk<=80){
        document.getElementById("sh").innerHTML=("C");
    }
    else if(uk >60 && uk<= 70){
        document.getElementById("sh").innerHTML=("D");
    }
    else if(uk =>0 && uk <=60){
        document.getElementById("sh").innerHTML=("F");
    }
    else{
        document.getElementById("sh").innerHTML=("Plese Enter 0 to 100")
    }
}

// ................................................
// Q3

function ii2(){
    let num1 =document.getElementById("value2").value

    if(num1%4==0){
        // console.log("leap year")
        document.getElementById("year").innerHTML=("leap year");
  }
     
    else{
        // console.log("not leap year")
        document.getElementById("year").innerHTML=("Not leap year");
    }
}


// ................................................
// Q4


function ii1(){
    let num1 =document.getElementById("value1").value

    if( num1>=0 && num1<=90){
        // console.log("Firtst quadrant")
        document.getElementById("tr").innerHTML=("Firtst quadrant");
  }
     else if(num1>90 && num1<=180){
    //    console.log("Second quadrant")
       document.getElementById("tr").innerHTML=("Second quadrant");
    }
    else if(num1>180 && num1<=270){
        // console.log("Third quadrant")
        document.getElementById("tr").innerHTML=("Third quadrant");
     }

     else if(num1>270 && num1<=360){
        // console.log("Fourth quadrant")
        document.getElementById("tr").innerHTML=("Fourth quadrant");
 
    }
    else{
        // console.log("plese enter 0 to 360")
        document.getElementById("tr").innerHTML=("plese enter 0 to 360");
    }
}


// ................................................
// Q5

function ii3(){
    let num1 =document.getElementById("value3").value
    let num2 =document.getElementById("value4").value
    let num3 =document.getElementById("value5").value

    if(num1==num2 && num2==num3 && num3==num1){
        // console.log("Equilateral ")
        document.getElementById("v").innerHTML=("Equilateral ")
  }
     
   else if(num1!=num2 && num2!=num3 && num3!=num1 ){

    //    console.log("Scalene ")
       document.getElementById("v").innerHTML=("Scalene ")
}
else{
    // console.log("Isosceles")
    document.getElementById("v").innerHTML=("Isosceles")
    }
}