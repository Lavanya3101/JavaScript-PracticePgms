const id=1;
const productName="watch";
const rating=5;

const product={
    id,
    productName,
    rating
}
console.log(product);

const product2={
    description:'Product 2 description',
    id,
    productName,
    rating
}
// normal way
const getProductTwoDesc=product2.description;
console.log(getProductTwoDesc);
//destructuring
const {description}=product2;
console.log(description);

const array=[1,2,3,4];
//normal way
let get1stValue=array[0];
let get2ndValue=array[1];
console.log(get1stValue,get2ndValue);
// destructuring
const [array1stElement,array2ndElement]=array;
console.log(array1stElement,array2ndElement);