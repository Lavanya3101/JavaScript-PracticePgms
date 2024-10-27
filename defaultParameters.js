function mulOfTwoNums(n1=1,n2=2){//default value
    return n1*n2;
}
console.log(mulOfTwoNums(10,20));//200
console.log(mulOfTwoNums(10));//20--n2 value is default value=2
// spread operator
const array=[2,3,4];
console.log(...array);//2 3 4
console.log([...array]);//[2,3,4]
const array1=[5,6];
console.log([0,...array,...array1,10])
//rest parameter

function getInfo(a,b,...d){
    console.log(a,b,d);
return 'lavanya';
}
console.log(getInfo(1,2,3,4,5))


