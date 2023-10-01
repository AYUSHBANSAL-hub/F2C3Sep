const activeTimers = document.getElementById("active-timers");

function startNewTimer() {
  const hours = document.getElementById("hours").value || 0;
  const minutes = document.getElementById("minutes").value || 0;
  const seconds = document.getElementById("seconds").value || 0;
  if (!hours && !minutes && !seconds) {
    alert("please enter a valid time");
    return;
  }
  const total_time_in_seconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  createTimer(total_time_in_seconds);
}

function createTimer(time_in_seconds) {
  const timerDiv = document.createElement("div");
  const timerDisplay = document.createElement("span");
  timerDiv.appendChild(timerDisplay);

  const timeInterval = setInterval(() => {
    time_in_seconds--;
    const display_hours = Math.floor(time_in_seconds / 3600);
    const display_minutes = Math.floor((time_in_seconds % 3600) / 60);
    const display_seconds = Math.floor(time_in_seconds % 60);
    timerDisplay.textContent = `Time Left: ${display_hours}:${display_minutes}:${display_seconds}`;
    console.log("workinng");
    if (time_in_seconds <= 0) {
        // let audio=new Audio("./path")
        // audio.play();
      clearInterval(timeInterval);
      const end_msg = document.createElement("div");
      end_msg.innerText = "Timer is Up !";
      timerDiv.innerHTML = "";
      timerDiv.appendChild(end_msg);
    }
  }, 1000);
  const stopButton = document.createElement("button");
  stopButton.textContent = "Stop";
  stopButton.onclick = () => clearInterval(timeInterval);

  // delete functionality
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    clearInterval(timeInterval);
    timerDiv.remove();
  };
  activeTimers.appendChild(timerDiv);
  timerDiv.appendChild(stopButton);
  timerDiv.appendChild(deleteButton);
}
