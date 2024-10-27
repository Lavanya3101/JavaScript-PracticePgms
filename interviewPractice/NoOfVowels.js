function NoOfVowels(s){
var vowels=["a","e","i","o","u"];
let count=0;
for(let i=0;i<s.length;i++){
    if(s.includes(vowels[i])){
        count++;
    }
}
return count;
}
console.log(NoOfVowels("lavenya"));
