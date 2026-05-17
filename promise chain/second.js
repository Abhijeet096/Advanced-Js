function asyncFunc1(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Some data 1");
            resolve("Successfully Data Fectched");
        } , 4000);

    });
};

function asyncFunc2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Some data 2");
            resolve("Successfully Data Fectched");
        } , 6000);

    });
};

console.log("Fetching Data 1.........")
let p1 = asyncFunc1();
p1
.then((res) =>{
    console.log(res);
    console.log("Fetching data 2......")
    let p2  = asyncFunc2();
    p2 
    .then((res) =>{
        console.log(res);
    })
});


// this is called as promise chaining
// now data 2 will fetch only when data 1 is fetched sucessfully
