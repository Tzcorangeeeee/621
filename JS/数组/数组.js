/*
var arr = [1,2,3,4];

var result = arr.push('tzc');
var result1 = arr.push('orange','banana');

console.log(JSON.stringify(arr));
console.log(result);
console.log(result1);*/

/*
var arr = [1,2,3,4,5,6];
var result = arr.shift();

console.log(JSON.stringify(arr));
console.log(result);*/



/*
const arr = ['福田','南山','深圳北','保安'];
const result = arr.every(function(item, index,array){
    if(item.length > 2){
        return false;
    }
    else return true;
})
console.log(result);
*/

/*
const arr = [1,2,4,5,6,7,8,9,10];
*/

/*for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}*/
/*
arr.forEach(function(currentItem,currentIndex ,currentArray) {
    console.log(currentItem);
})
console.log(JSON.stringify(arr));
*/

// const arr = [1,2,3,5,5];
//
// var result = arr.map(item => {
//     return item+=10;
// });
// console.log(result);

/*
const arr1 = [
    { name: '田梓成', age: '21' },
    { name: '老田梓成', age: '31' },
];

const arr2 = arr1.map(item => item);
console.log(arr2);

const arr3 = arr1.map(item =>( {
    myAge :item.age,
    myName:item.name,
} ));
console.log(arr3);*/

/*
const arr = [2,3,5,67,]
const arr1 = arr.reduce((prev,item) =>{
    return prev + item;
})
console.log(arr1);*/

/*
function repeatCount(arr , value){
    if(!arr || arr.length == 0) return 0;

    return arr.reduce((totalCount,item) =>{
        totalCount+=item == value ? 1:0;
        return totalCount;
    },0 )
}

let arr1 = [1, 2, 6, 5, 6, 1, 6];

console.log(arr1);
console.log(repeatCount(arr1,6));*/

/*
let arr1 = [1, 2, 6, 5, 6, 1, 6];

const maxVale = arr1.reduce((prev,item) => {
    return prev>item? prev:item;
})
console.log(maxVale);*/

/*
const arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];

for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
        if(arr[i]==arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);*/

const arr = [1,2,3,5,6,2,3,5,6,7,1,2,5,6,4,5,6,];
var one = noRepeat(arr);

function noRepeat(arr) {
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        bool = true;
        for(var j=0;j<arr.length;j++){
            if(arr[i]===newArr[j]){
                bool = false;
            }
        }
        if(bool){
            newArr[newArr.length]=arr[i];
        }
    }
    return newArr;
}

console.log(one);