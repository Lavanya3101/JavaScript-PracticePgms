function HighestNum(arr){
let highNum=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>highNum){
        highNum=arr[i];
    }
}
return highNum;
}
console.log(HighestNum([1,3,2,4,5]));