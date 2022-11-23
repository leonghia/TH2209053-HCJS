let hour = 10;
let minute = 60;

var span_min = document.getElementById("minutes");
var span_sec = document.getElementById("seconds");

var min = 10, sec = 0;
var timer = setInterval(function () {
    var m = min < 10 ? '0' + min : min;
    var s = sec < 10 ? '0' + sec : sec;
    span_min.innerText = m;
    span_sec.innerText = s;

    sec -= 1;
    if (sec < 0) {
        sec = 59;
        min -= 1;
    }

    if (min < 0) {
        clearInterval(timer);
    }
}, 100);