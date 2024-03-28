const clicker = document.getElementById("clicker");
const clickerCounter = document.getElementById("clicker__counter");
const imgCookie = document.getElementById("cookie");

function imgWidht(){
    imgCookie.width = 300;
}


imgCookie.onclick = function(){
        clickerCounter.textContent++;
        imgCookie.width = 200;
        setTimeout(imgWidht, 200);


    }
