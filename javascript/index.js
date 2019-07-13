const startBtn = document.getElementsByClassName('start');
Array.from(startBtn)[0].onclick = function(){
    console.log(startBtn[0]);
    window.location.href="html/projectQ.html";
}