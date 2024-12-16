/*
var button = document.getElementById("button");

button.onclick = function(){
    alert("Butoon was clicked!");
}*/

/*
function foo() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const result = foo(1, 2);
console.log(result);*/


function getMax(){
    var max = arguments[0];
    for(var i=0;i<arguments.length;i++){
        if(max<arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}
console.log(getMax(1,2,3,5,5,6,7,8));