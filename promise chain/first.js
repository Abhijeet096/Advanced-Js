function asyncFunc1(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Some data 1");
            resolve("Successfully Data Fectched");
        } , 4000);

    });
}

function asyncFunc2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Some data 2");
            resolve("Successfully Data Fectched");
        } , 6000);

    });
}

console.log("Getting Data 1.........")
let p1 = asyncFunc1();
p1
.then((res) =>{
    console.log(res);
});

// Here we are fetching data 1 and 2 together but we want first fetch data 1 and after founding that data then only search for data 2 
// this is some kind of promise chaining we can do it by using .then in .then


console.log("Getting Data 2.........")
let p2 = asyncFunc2();
p2
.then((res) =>{
    console.log(res);
});
