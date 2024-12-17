
var oldsLi1 = document.getElementById('first_li');
var oldsImg1 = document.getElementById('first_img');

oldsLi1.onmouseover = function(){
    oldsImg1.style.display = 'block';
}

oldsLi1.onmouseout = function(){
    oldsImg1.style.display = 'none';
}

var oldsLi3 = document.getElementById('third_li');
var oldsImg3 = document.getElementById('third_img');

oldsLi3.onmouseover = function(){
    oldsImg3.style.display = 'block';
}

oldsLi3.onmouseout = function(){
    oldsImg3.style.display = 'none';
}


function banner(){
    var index = 1;
    index++;
    if(index>2){
        index=1;
    }

    var lunBo = document.getElementsByClassName('pic');
    lunBo.src = 'image/'+index+'jpg'
    setInterval(lunBo,1000);
}

banner();