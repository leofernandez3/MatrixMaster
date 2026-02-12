let workInput = document.getElementById("work-length");
let breakInput = document.getElementById("break-length");
let timeText = document.getElementById("time");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let isRunning = false;
let timer = null;
let onBreak = false;



function startTimer() {
    if (isRunning) {
      return;
    }

    if (minutes === 0 && seconds === 0) {
        if (onBreak) {
            minutes = parseInt(breakInput.value);
        } else {
            minutes = parseInt(workInput.value);
        }
        seconds = 0;
    }

    isRunning = true;

    timer = setInterval(function() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;

                if (!onBreak) {
                    onBreak = true;
                    minutes = parseInt(breakInput.value);
                    seconds = 0;
                    startTimer();
                } else {
                    onBreak = false;
                    alert("Pomodoro and break finished!");
                }
                return;
            } else {
                minutes = minutes - 1;
                seconds = 59;
            }
        } else {
            seconds = seconds - 1;
        }

        showTime();

    }, 1000);
}

function showTime() {
    let displayMinutes = minutes;
    let displaySeconds = seconds;

    if (displayMinutes < 10) {
        displayMinutes = "0" + displayMinutes;
    }
    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds;
    }

    timeText.innerText = displayMinutes + ":" + displaySeconds;

    if (onBreak) {
        timeText.style.color = "red";
    } else {
        timeText.style.color = "#689f38";
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    onBreak = false;
    minutes = parseInt(workInput.value);
    seconds = 0;
    showTime();
}

startButton.onclick = function() {
    startTimer();
};
pauseButton.onclick = function() {
    pauseTimer();
};
resetButton.onclick = function() {
    resetTimer();
};

showTime();