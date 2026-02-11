let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;
let running = false;
let lapCounter = 1;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");
const modeToggle = document.getElementById("modeToggle");

function updateDisplay() {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    display.innerText = `${m}:${s}:${ms}`;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds++;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            updateDisplay();
        }, 10);
    }
}

function pause() {
    running = false;
    clearInterval(timer);
}

function reset() {
    running = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 1;
    laps.innerHTML = "";
    updateDisplay();
}

function lap() {
    if (running) {
        const li = document.createElement("li");
        li.innerText = `Lap ${lapCounter++} - ${display.innerText}`;
        laps.appendChild(li);
    }
}

function toggleMode() {
    document.body.classList.toggle("light");
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
modeToggle.addEventListener("click", toggleMode);

updateDisplay();
