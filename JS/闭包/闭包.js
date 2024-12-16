function A() {
    const a = 10;
    function B() {
        debugger
        console.log(a);
    }
    return B;
}

A();
const result =  A();
result();
 //                               场景1

/*unction checkScores(socres){
    function Bool(n) {
        if(n>socres){
            alert('过了');
        }
        else{
            alert('重修');
        }
    }
    return Bool;
}

var A = checkScores(60);
var B = checkScores(70);

A(65);
B(65);*/

