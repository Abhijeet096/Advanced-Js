// function for getdata
function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Data", dataId);
            resolve("Success");
        },2000);
    });
};

// async await 

async function getAllData(){
    console.log("Getting data 1.....")
   let p1 = await getData(1);
   console.log(p1);
    console.log("Getting data 1.....")
   let p2 = await getData(2);
   console.log(p2);
    console.log("Getting data 1.....")
   let p3 = await getData(3);
   console.log(p3);
    
}


// iife funtions --> no need to named or call them they executed imidiately where they get defined

// (async function (){
//       console.log("Getting data 1.....")
//    let p1 = await getData(1);
//    console.log(p1);
//     console.log("Getting data 1.....")
//    let p2 = await getData(2);
//    console.log(p2);
//     console.log("Getting data 1.....")
//    let p3 = await getData(3);
//    console.log(p3);
// }) ();

getAllData();

