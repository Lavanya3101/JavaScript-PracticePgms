const LongestWord=(s)=>{
let words=s.split(" ");
let longestWord="";
for(let word of words){
    if(word.length>longestWord.length){
        longestWord=word;
    }
}
return longestWord;
}
console.log(LongestWord("Hii Good Evening"));
