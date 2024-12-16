/*
function fn(a) {
    console.log(a);

    var a = 666;

    console.log(a);

    function a() {}

    console.log(a);

    var b = function() {};

    console.log(b);

    function c() {}
}

fn(1);*/

var foo = 3
function fun() {
    console.log(foo);
    foo = 5
    console.log(foo)
    function foo() {
        console.log(foo);
    }
}

fun();
console.log(foo);