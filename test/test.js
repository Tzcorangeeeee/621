
/*
function Check(i) {
    if(i == 0){
        console.log(0);
    }
    else if(i>0){
        console.log('正');
    }
    else{
        console.log('负');
    }
}

Check(1);
Check(0);
Check(-2);*/

/*
var a =[1,2,3,5,6,7]
function takeArr() {
    var newArr = Math.max.apply(Math,a)
    console.log(newArr)
}

takeArr()
*/

/*
function sum(a,b) {
    return a + b;
}
*/

/*
var  a = new function (){

}
*/
const arr = [1,2,3,5,6]

function addNumber(number) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + number;
    }
}
addNumber(1);
console.log(arr);