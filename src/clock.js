

const clockTitle = document.querySelector(".js-clock");

let COEFF_SEC = 1000;
let COEFF_MIN = COEFF_SEC * 60;
let COEFF_HOUR = COEFF_MIN * 60;
let COEFF_DAY = COEFF_HOUR * 24;

function intervalProc() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);

    let timeLeft = christmas - today;

    const day = Math.floor(timeLeft / COEFF_DAY, 10);
    timeLeft -= day * COEFF_DAY;

    const hour = Math.floor(timeLeft / COEFF_HOUR, 10);
    timeLeft -= hour * COEFF_HOUR;

    const min = Math.floor(timeLeft / COEFF_MIN, 10);
    timeLeft -= min * COEFF_MIN;

    const sec = Math.floor(timeLeft / COEFF_SEC, 10);

    console.log(day);

    clockTitle.innerHTML = `${day.toString(10).padStart(2, 0)}d 
                            ${hour.toString(10).padStart(2, 0)}h 
                            ${min.toString(10).padStart(2, 0)}m 
                            ${sec.toString(10).padStart(2, 0)}s`;
}


intervalProc();
setInterval(intervalProc, 500);
