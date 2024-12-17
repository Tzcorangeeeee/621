var btn1 = document.getElementById("btn1");
var img1 = document.getElementById("img1");
var btn2 = document.getElementById("btn2");
var img2 = document.getElementById("img2");
btn1.onclick = function(){
    animate(img1,200)
    animate(img2,200)
}

btn2.onclick = function(){
    animate(img1,400)
    animate(img2,400)
}


function animate(ele,target){
    clearInterval(ele.timer)
    var speed = target > ele.offsetLeft ? 10:-10;

    ele.timer = setInterval(function(){
        ele.style.left = ele.offsetLeft + speed +'px';

        var val = target - ele.offsetLeft;

        if(Math.abs(val)<Math.abs(speed)){
            ele.style.left = target+"px";
            clearInterval(ele.timer)
        }
    },30)
    
}