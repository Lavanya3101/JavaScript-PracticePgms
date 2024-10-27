function AnagramEx(s1,s2){
let sort1=s1.split("").sort().join("");
let sort2=s2.split("").sort().join("");
return sort1===sort2;
}
console.log(AnagramEx("lavanya","vanyala"));
