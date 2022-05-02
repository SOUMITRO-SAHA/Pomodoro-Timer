var minutes = 25;
var seconds = "00";
var click = new Audio("sounds/Click.mp3");
var bell = new Audio("sounds/AlarmSound.mp3");

function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
function Start() {
  click.play();
  minutes = 24;
  seconds = 59;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  let minutes_interval = setInterval(minutesTimer, 60000);
  let seconds_interval = setInterval(secondsTimer, 1000);
  function minutesTimer() {
    minutes -= 1;
    document.getElementById("minutes").innerHTML = minutes;
  }
  function secondsTimer() {
    seconds -= 1;
    document.getElementById("seconds").innerHTML = seconds;
    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
        document.getElementById("done").innerHTML =
          "The Session Completed! Take a break";
        document.getElementById("done").classList.add("show-msg");

        bell.play();
      }
      seconds = 60;
    }
  }
}
