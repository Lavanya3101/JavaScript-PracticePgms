function reverseString(s){
// let reverse="";
// for(let i=s.length-1;i>=0;i--){
//     reverse+=s[i];
// }
// return reverse;

// using inbuilt methods
return s.split("").reverse().join("");
}
console.log(reverseString("lavanya"));


