function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        console.log("Data" , dataId);
        
        if(getNextData){
            getNextData();
        }
        resolve("success");
      }, 5000);
    });
}

let finalVal = getData(123);
console.log(finalVal);