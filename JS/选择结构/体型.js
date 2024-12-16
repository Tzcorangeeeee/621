/*
const weight = parseFloat(prompt(''))
const tall = parseFloat(prompt(''))

var BMI = weight / Math.pow(tall,2)

if(BMI < 18.5){
    alert(瘦);
} else if(BMI <25){
    alert(正常);
} else if(BMI < 18.5){}..
*/

/*
const number = parseInt(prompt('请输入汽油型号'))
const level = parseFloat(prompt('请输入需要加多少升'))
if(number == 92){
    if(level <20){
        const price = number * 6
    }else if(level >= 20){
        const price = number * 5.9
    }
} else if (number == 97){
    if(level < 30){
        const price = number * 7
    } else if(level >= 30){
        const price = number * 6.9
    }
}else {
    alert('错误');
}
alert('价格是' + price);

*/
const bianhao = parseInt(prompt('您想加什么油？填写92或者97'));
const sheng = parseFloat(prompt('您想加多少升？'));
if (bianhao == 92) {
    if (sheng >= 20) {
        const price = sheng * 5.9;
    } else {
        const price = sheng * 6;
    }
} else if (bianhao == 97) {
    if (sheng >= 30) {
        const price = sheng * 6.95;
    } else {
        const price = sheng * 7;
    }
} else {
    alert('不好意思，没有这个编号的汽油！');
}




