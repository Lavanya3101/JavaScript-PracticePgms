function outerfun(){
    let outVar=10;
    console.log("outer function executed");
    function innerFun(){
        console.log(outVar);
    }
    return innerFun;
}
var closure=outerfun();
closure();