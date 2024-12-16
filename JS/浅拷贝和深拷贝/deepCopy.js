const person = {
    name:'tzc',
    age:21,
    info:{
        desc:'very good'
    },
    hobby:['bodybuilding','playing','singing'],
};

function deepCopy(news,olds){
    for(let key in olds){
        let item = olds[key];
        if(item instanceof Object){
            news[key]=[];
            deepCopy(news[key],item);
        }
        else if (item instanceof Array){
            news[key]=[];
            deepCopy(news[key],item);
        }
        else{
            news[key]=item;
        }
    }
}
let person2 = {};
deepCopy(person2,person);
console.log(person)
console.log(person2)
person2.info.desc = 'not bad';
console.log(person.info.desc)
console.log(person2.info.desc)
console.log(person2)
