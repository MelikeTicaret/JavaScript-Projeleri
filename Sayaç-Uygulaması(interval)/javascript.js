let count = 0;

const value = document.getElementById("value")
let interval;

function decrease() {
    clearInterval(interval);
    interval=setInterval(function(){
        count-=1;
        value.innerHTML=count;
    },1000);
}
function increase() {
    clearInterval(interval);
    interval=setInterval(function(){
        count+=1;
        value.innerHTML=count;
    },1000);
}
function reset() {
    clearInterval(interval);
    interval=setInterval(function(){
        count=0;
        value.innerHTML=count;
    },1000);
}
