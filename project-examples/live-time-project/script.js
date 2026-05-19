let display = document.querySelector("#display");

setInterval(() => {
    updateDisplay();
},50);

function updateDisplay() {
    let fullDate = new Date();
    let months = ["Jan", "Feb",  "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",]

    let year = fullDate.getFullYear();
    let month = months[fullDate.getMonth()];
    let day = days[fullDate.getDay()];

    let hour = fullDate.getHours();
    let minute = addZero(fullDate.getMinutes());
    let second = addZero(fullDate.getSeconds());

    let newVal = `year = ${year} | month = ${month} | day = ${day} | time =  ${hour} : ${minute} : ${second}`;

    display.textContent = newVal

    console.log(hour);
}

function addZero(val) {
    return val < 10 ? "0" + val : val;
}