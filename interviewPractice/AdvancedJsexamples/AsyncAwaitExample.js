async function test(){
    console.log("inside function");
    let res=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // let res={text:async()=>"data fetched successfully"}
    console.log("inside fun stmt2")
    let finalres=await res.text();
    console.log(finalres);
    
}
test();
console.log("outerfunction")