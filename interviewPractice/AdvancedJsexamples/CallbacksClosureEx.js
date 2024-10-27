function fetchData(url){
let responseData;
fetch(url).then(r=>{
    responseData=r;
    console.log(responseData);
    
})
}