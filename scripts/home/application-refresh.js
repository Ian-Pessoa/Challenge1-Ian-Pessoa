let timeToRefresh = document.querySelector('.time-to-refresh');
timeToRefresh.innerText = 30;

let countdown = setInterval(() => {
  let timeLeft = parseInt(timeToRefresh.innerText);
  timeLeft -= 1;
  timeToRefresh.innerText = timeLeft;

  if (timeLeft === 0) {
    clearInterval(countdown);
    window.location.reload();
  }
}, 1000);