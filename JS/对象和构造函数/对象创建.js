/*对象创造和嵌套和函数*/
/*
const A = {
    name : 'tzc',
    age : 21,

    B:{
        name : 'czt',
        age : 22,
    },

    sayName:function(){
        console.log(this.name);
    }
}

console.log(A)
A.sayName();
*/


/*利用构造函数创造对象*/
/*
const person = new info('tzc',21);
console.log(person);
person.sayName();

function info(name,age){
    this.name=name;
    this.age=age;

/!*    function sayName(){
        console.log(this.name);*!/  /!*这个写法是错的 因为this 没有指向他 所以 person.sayName()是调用不了的*!/
    this.sayName =  function(){
        console.log(this.name);
    }
}*/


