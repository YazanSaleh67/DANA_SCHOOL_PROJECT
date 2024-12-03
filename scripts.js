// Select the box and timer elements
const box = document.getElementById('box');
const timerDisplay = document.getElementById('timer');

// Initialize timer and interval variables
let timer = 10;

// Function to update the timer
function updateTimer() {
  // Update the displayed timer
  timerDisplay.textContent = timer;

  // Check condition when the timer is below 5
  if (timer < 5) {
    box.style.backgroundColor = 'orange'; // Change color to orange
  }

  // Stop everything when timer reaches 0
  if (timer === 0) {
    clearInterval(interval); // Stop the interval
    box.style.backgroundColor = 'red'; // Final color change
    alert('Timer finished!');
  }

  // Decrease the timer
  timer--;
}

// Start a loop that runs every second
const interval = setInterval(updateTimer, 1000);

// Simple loop to make the box move repeatedly (for demonstration)
let direction = 1;
setInterval(() => {
  const currentMargin = parseInt(getComputedStyle(box).marginLeft) || 0;
  if (currentMargin > 300 || currentMargin < 0) direction *= -1;
  box.style.marginLeft = `${currentMargin + 5 * direction}px`;
}, 50);
