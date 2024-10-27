const personArray=[
    {
        name:'john',
        age:30,
        city:'tpt'
    },
    {
        name:'Josh',
        age:25,
        city:'ctr'
    },
    {
        name:'Peter',
        age:27,
        city:'klr'
    }
]
let getAllnames=personArray.map((person,index)=>{
console.log(person,index);
return `${person.name} age is ${person.age}`;
});
console.log(getAllnames);

let getPersonFromTpt=personArray.find((person,index)=>{//it will give only first element if more elements satisfies the condition
    return person.city==='klr';
})
console.log(getPersonFromTpt);

let getAllPersonsFromKlr=personArray.filter((person,index)=>{//it will return all the elements
    return person.city==='klr';
})
console.log(getAllPersonsFromKlr);

let checkSomeArrayMethodWithExample=personArray.some((person)=>{
return person.age>30;
})
console.log(checkSomeArrayMethodWithExample)

let checkEveryArrayMethodWithExample=personArray.every((person)=>{
    return person.age>= 25;
})
console.log(checkEveryArrayMethodWithExample)

const fruits=['apple','banana','grapes'];
console.log(fruits.includes('apple'));

const checkIndexofExample=fruits.indexOf('grapes');
console.log(checkIndexofExample)

let getIndexOfPerson=personArray.findIndex((person)=>{
    return person.city==='klr';
})
console.log(getIndexOfPerson);