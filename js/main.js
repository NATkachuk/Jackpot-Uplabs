document.addEventListener("DOMContentLoaded", function() {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let totalSeconds = 9 * 60 + 48; 

    function updateTimer() {
        if (totalSeconds >= 0) {
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            minutesElement.textContent = minutes < 10 ? `${minutes}` : minutes;
            secondsElement.textContent = seconds < 10 ? `${seconds}` : seconds;

            totalSeconds--;
        } else {
            clearInterval(timerInterval);
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});