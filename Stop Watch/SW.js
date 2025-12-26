let secondElapsed = 0;
let interval = null;
const time = document.getElementById('time');

function padStart(value) {
    return value.toString().padStart(2, '0');
}
function setTime() {
    const minutes = Math.floor(secondElapsed / 60)
    const seconds = secondElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function timer() {
    secondElapsed++
    setTime()
}

function startClock() {
    interval = setInterval(timer, 1000);
}


function stopClock() {


}


function resetClock() {



}