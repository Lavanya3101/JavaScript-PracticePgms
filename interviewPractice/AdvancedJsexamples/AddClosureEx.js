function outer(num1){
    return function inner(num2){
        console.log(num1+num2);
    }
    // return inner;
}
var res=outer(10);
res(5);