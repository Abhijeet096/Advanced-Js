let promise = new Promise((resolve, reject)=>{
    console.log("I am a Promise");
    // resolve("Sucess");
    reject("Some Error");
});
console.log(promise);