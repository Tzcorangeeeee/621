/*
function Father(name,age){
    this.age = 30;
    this.name = '大海';
}

function Son(name,age){
    Father.call(this,name,age);
}

const son1 = new Son();
console.log(JSON.stringify(son1));

*/

/*
function fun1(){
    console.log(this);
    console.log(this.name);
}

var obj1 = {
    name:'tzc',
    sayName : fun1,
    age : 28,
};
var obj2 = {
    name : 'czt',
    sayName : fun1,
    age : 28,
};
var name = 'orange';
obj1.sayName();
*/

/*
function Father(name,age){
    this.age = 30;
    this.name = '大海';
    console.log(this);
}
function Son(name,age){
    Father.call(this,name,age);
}

Father.call();
Son.call();*/

/*
var info = {
    name : 'tzc',
    age : 29,
}

function change(a,b){
    console.log(this);
    console.log(info.name);
    console.log(info.age);
    console.log(a+b);
}

change.call(null,2,3);
change.call(info,2,3);
*/

/*function Father(myName, myAge) {
    this.name = myName;
    this.age = myAge;
}

function Son(name , age){
    Father.apply(this, [name,age]);
}

var son = new Son('tzc',18);
console.log(son.name);
console.log(son.age);*/

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const B = Math.max.apply(Math, A)
console.log(B);

