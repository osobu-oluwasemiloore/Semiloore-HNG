function updateTime() {
    const now = new Date();
    const utcString = now.toUTCString();
    document.getElementById('current-time').innerText = 'Current Time (UTC): ' + utcString;
}

function updateDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getUTCDay()];
    document.getElementById('current-day').innerText = 'Current Day: ' + dayOfWeek;
}

updateTime();
updateDay();
setInterval(updateTime, 1000);