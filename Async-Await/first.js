// Async function always returns a promise

// async function hello(){
//     console.log("Hello")
// }
// let result = hello();
// console.log(result);


// Await we can use only in async funtion only

function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Weather data");
            resolve(200); // 200 represent the message of sucess
        } , 4000);
    });
};

async function getWeatherData(){
    await api(); // first call
    console.log("fetching second data.....");
    await api(); // second call
}

getWeatherData();