function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data= "Data fetched successfully!";
            resolve(data);
        },2000)
    })
}

async function getData() {
    console.log("fetching data");
    try{
        const result=await fetchData();
        console.log(result);
    }catch(error){
        console.log(error);
    }
    
}
getData();