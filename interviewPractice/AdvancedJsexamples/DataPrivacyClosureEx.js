function createSecret(secret){
    return function(){
        return secret;
    }
}
const mySecret=createSecret("java script");
console.log(mySecret());
