/*
function factorial(n){
    if (n == 1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));*/

// 递归函数：计算一个数的阶乘

/*
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}

for(var i = 100; i <999; i++){
    const i_str = i.toString();
    const a = i_str[0];
    const b = i_str[1];
    const c = i_str[2];
    if(factorial(a)+factorial(b)+factorial(c)==i){
        console.log(i);
    }
}
*/

function fib(n){
    if(n==0 || n==1){
        return 1;
    }
    return fib(n - 1)+fib(n - 2);
}
for(var i=1;i<=10;i++){
    console.log(fib(i));
}
