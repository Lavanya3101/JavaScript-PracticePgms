const number=5;
const numString="5";

console.log(number==numString);// true, because == allows type coercion
console.log(number===numString);// false, because the types (number vs string) are different

