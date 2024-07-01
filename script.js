const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function initJS(){
    const dateDisplay = document.querySelector('#date');
    const timeDisplay = document.querySelector('#time');
    const currentDayIndex = new Date().getDay();
    dateDisplay.textContent = WEEK_DAYS[currentDayIndex];
    startTimeLoop(timeDisplay);
}

function startTimeLoop(timeDisplay) {
    setInterval(() => {
        const date = new Date();
        timeDisplay.textContent = date.toUTCString().split(' ').slice(4).join(' ')
    }, 1000);
}

document.addEventListener('DOMContentLoaded', initJS)