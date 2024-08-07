


function doubleSquare(op){
    
    function  double(op){
        return op*2
    
    }
    
    function square(op){
        return  op*op 
      
     }

     let v=double(op);
     let w=square(v);

     return w;

}


console.log(doubleSquare(3))

doubleSquare(3)