let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const millisecondsSpan = document.getElementById('milliseconds');

startStopBtn.addEventListener('click', () => {
    if (!running) {
        start();
    } else {
        stop();
    }
});

resetBtn.addEventListener('click', reset);

function start() {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = true;
    startStopBtn.innerHTML = 'Stop';
    startStopBtn.style.background = '#dc3545';
}

function stop() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerHTML = 'Start';
    startStopBtn.style.background = '#007bff';
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerHTML = 'Start';
    startStopBtn.style.background = '#007bff';
    minutesSpan.innerHTML = '00';
    secondsSpan.innerHTML = '00';
    millisecondsSpan.innerHTML = '00';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);
    minutesSpan.innerHTML = (minutes < 10) ? '0' + minutes : minutes;
    secondsSpan.innerHTML = (seconds < 10) ? '0' + seconds : seconds;
    millisecondsSpan.innerHTML = (milliseconds < 10) ? '0' + milliseconds : milliseconds;
}
