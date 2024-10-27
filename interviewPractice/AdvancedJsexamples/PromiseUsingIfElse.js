const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success=false;
            if(success){
                resolve("Data fetched successfully!");
            }
            else{
                reject("Error fetching data");
            }
        }, 2000);
    })
}
// without async and await
//  fetchData().then((data)=>console.log(data)).catch((error)=>console.log(error));
// another way using async and await
async function getData(){
    try{
        const res=await fetchData();
        console.log(res);
        
    }catch(error){
        console.log(error);
        
    }
}
getData();
