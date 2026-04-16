const currentTime = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  currentTime.textContent = `Current Time: ${Date.now()}milliseconds`;
}

updateTime();
setInterval(updateTime, 1000);
