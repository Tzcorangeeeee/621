/*利用for in 浅拷贝*/
/*
const person =  {
    name : 'tzc',
    age : 21,
    info : {
        desc : 'very good',
    }
}

const person2 =  {
}

for(let key in person) {
    person2[key] = person[key];
}
console.log(person);
console.log(person2);
person2.age = 2;
console.log(person2.age);
console.log(person.age);*/


/*!!!。assign*/
const person =  {
    name : 'tzc',
    age : 21,
    info : {
        desc : 'very good',
    }
}

const person1 =  {
    name : 'tzc',
    age : 21,
    color : 'yellow',
    info : {
        desc : 'very good',
    }
}

const person2 = Object.assign({}, person);
console.log(person2);
const person3 = Object.assign({}, person);
person3.name = 'czt'

person2.info.name = 'not bad';
console.log(person2);