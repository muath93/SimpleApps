function clock() {
    const fullDate = new Date;
    let hours = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();

    if (hours < 10) {

        hours = "0" + hours;
    }
    if (min < 10) {

        min = "0" + min;
    }
    if (sec < 10) {

        sec = "0" + sec;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + min;
    document.getElementById('second').innerHTML = ":" + sec;

}
setInterval(clock, 100);