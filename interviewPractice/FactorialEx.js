function FactorialEx(n){
let fact=1;
for(let i=2;i<=n;i++){
    fact=fact*i;
}
return fact;
}
console.log(FactorialEx(5));
