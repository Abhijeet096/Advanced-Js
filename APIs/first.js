const url = "https://serpapi.com/search.json?q=Coffee&location=India&hl=hi&gl=in&google_domain=google.co.in";
// const factPara = document.querySelector("#fact");


const getFacts = async() =>{
let promise = await fetch(url); // promise if variable here we can use response as well
console.log(promise); // json format (JavaScript object notation)
let data =await promise.json();
console.log(promise.json);

}

getFacts();


// using promise chain 
function getFact2(){
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
    })
}

getFact2();