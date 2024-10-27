const Register=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Please register");
            resolve("Successful");
        },3000)
    })
}
const Login=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("please login");
            resolve();
        },5000)
    })
}
const Thankyou=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Thank you & Welcome");
            resolve();
        },1000)
    })
}
Register().then(Login).then(Thankyou);