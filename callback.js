const sum = (a,b) =>{
    console.log(a+b);
}
const calculator = (a,b,sumCallback) =>{
    sumCallback(a,b);
}

calculator( 1,4,sum);

// callback means a funtion passing as an argument to an another funtion
