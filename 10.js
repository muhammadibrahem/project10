const daysEl = document.getElementById("day");
const hoursEl = document.getElementById("hour");
const minsEl = document.getElementById("minute");
const secsEl = document.getElementById("second");
const newyears = "8 Nov 2026";
function countdown() {
  const newyearsDate = new Date(newyears);
  const currentDate = new Date();
  const totalseconds = (newyearsDate - currentDate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial call
countdown();
setInterval(countdown, 1000);
