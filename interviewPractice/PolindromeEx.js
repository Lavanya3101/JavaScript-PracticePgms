function PolindromeEx(s){
let reverse="";
for(let i=s.length-1;i>=0;i--){
    reverse+=s[i];
}
if(s===reverse){
    return "Polindome";
}
return "Not"
}
console.log(PolindromeEx("amma"));
