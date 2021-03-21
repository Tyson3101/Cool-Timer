let interval: number;
const setHour = (newNum: number) => {
  const hours = document.getElementById("hour");
  if (newNum) hours.innerText = `${newNum}h `;
  else hours.innerText = "";
  return hours;
};
const setMin = (newNum: number) => {
  const min = document.getElementById("min");
  if (newNum) min.innerText = `${newNum >= 10 ? newNum : `${newNum}`}m `;
  else if (newNum === 0) min.innerText = "";
  else min.innerText = "0m";
  return min;
};
const setSecs = (newNum: number) => {
  const sec = document.getElementById("sec");
  sec.innerText = `${newNum >= 10 ? newNum : `${newNum}`}s `;
  return sec;
};

function start({
  hours,
  mins: minutes,
  secs: seconds,
}: {
  [key: string]: number;
}) {
  clearInterval(interval);
  if (minutes >= 60) {
    hours += Number((minutes / 60).toFixed(0));
    minutes = Number((minutes % 60).toFixed(0));
  }
  if (seconds >= 60) {
    minutes += Number((seconds / 60).toFixed(0));
    seconds = Number((seconds % 60).toFixed(0));
  }
  //const [hours, minutes, seconds] = [
  setHour(hours || 0); //,
  setMin(minutes || 0); //,
  setSecs(seconds || 0); //,
  // ];

  interval = setInterval(() => {
    if (seconds <= 0 && minutes <= 0 && hours >= 1) {
      hours--;
      seconds = 59;
      minutes = 59;
    } else if (seconds <= 0 && minutes <= 1) {
      seconds = 59;
      minutes = 0;
    } else if (seconds <= 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
    setHour(hours || 0);
    setMin(minutes || 0);
    setSecs(seconds || 0);
    if (seconds === 0 && minutes === 0 && hours === 0)
      return clearInterval(interval);
  }, 1000);
}
