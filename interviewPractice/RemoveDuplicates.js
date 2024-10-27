function RemoveDuplicates(arr){
    let unique=[];
    for(let i=0;i<arr.length;i++){
        if(unique.indexOf(arr[i])===-1){
unique.push(arr[i]);
        }
    }
    return unique;
// return [...new Set(arr)]
}
console.log(RemoveDuplicates([1,2,3,1,4,2]));
