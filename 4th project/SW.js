let secondElapsed = 0;
let interval = null;
const time = document.getElementById('time');

function setTime() {
    const minutes = Math.floor(secondElapsed / 60)
    const seconds = secondElapsed % 60
    time.innerHTML = `${minutes}:${seconds}`;
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