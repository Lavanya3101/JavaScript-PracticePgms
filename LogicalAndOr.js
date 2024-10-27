let a=false;
let b=true;
console.log(a&&b);
//2
function getName(name){
    return name;
}
let a1=false;
let b1=true;
console.log(a1&& getName("lavanya"));//false//not print name //because if first stmt is false it will not check second stmt
console.log(a1|| getName("lavanya"));//lavanya
// 
let a2=true;
let b2=true;
console.log(a2&& getName("lavanya"));//lavanya
console.log(a2|| getName("lavanya"));//true
