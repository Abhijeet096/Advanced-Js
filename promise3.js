const getPromise = () =>{
    return new Promise ((resolve, reject) =>{
        console.log("I am a promise");
        reject("some error occured");
        // resolve("sucess");
    });
};

let promise = getPromise();
promise
.then((res) =>{
    console.log("promise Fullfilled" , res);
})

.catch((err)=>{
    console.log("Rejected! ", err)
})