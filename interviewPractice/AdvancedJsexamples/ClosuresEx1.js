function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log(`outer variable :${outerVariable}`);
        console.log(`inner variable: ${innerVariable}`);
        
    }

}
const closureEx=outerFunction('outer value');
closureEx('inner value')