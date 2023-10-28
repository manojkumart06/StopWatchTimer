// script.js

// Initialize variables
let running = false; // Indicates if the stopwatch is running
let startTime = 0;  // Stores the start time
let interval;       // Interval ID for updating the time display

// Start the stopwatch
function start() {
    if (!running) {
        if (startTime === 0) {
            startTime = Date.now();
        } else {
            // Adjust the start time to account for paused time
            startTime = Date.now() - (Date.now() - startTime);
        }
        running = true;
        interval = setInterval(updateTime, 10); // Update time every 10 milliseconds
    }
    document.getElementById("start").textContent = "Start";
}

// Stop or pause the stopwatch
function stop() {
    if (running) {
        running = false;
        clearInterval(interval);
        document.getElementById("start").textContent = "Resume";
    }
}

// Reset the stopwatch
function reset() {
    running = false;
    clearInterval(interval);
    startTime = 0;
    document.getElementById("start").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
}

// Update the time display
function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = (currentTime % 1000).toString().slice(0, 2);

    const timeString = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}.${milliseconds}`;
    document.getElementById("display").textContent = timeString;
}

// Helper function to pad single-digit numbers with a leading zero
function padTime(value) {
    return value < 10 ? "0" + value : value;
}
