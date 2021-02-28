const HOUR_IN_MILLISECONDS = 3600000;
const countdownStart = new Date('April 24, 2021 11:30:00').getTime();
const countdownEnd = new Date('April 25, 2021 11:30:00').getTime();
const countdownElem = document.getElementById('countdown');

// 'solution' to run function once within setInterval
/* let test = false;
const testFun = () => {
    if (!test) {
        console.log('This will only run once');
    }

    test = true;
} */

const countdownBegin = new Event('countdownBegin');
document.addEventListener('countdownBegin', () => {
    console.log('Countdown has started');
    countdownElem.style.fontSize = '10rem';
}, { once: true });

const hourLeft = new Event('hourLeft');
document.addEventListener('hourLeft', () => {
    console.log('One hour left');
}, { once: true });

const countdownStop = new Event('countdownStop');
document.addEventListener('countdownStop', () => {
    console.log('Countdown has ended')
}, { once: true });


const timeRemaining = duration => {
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((duration % (1000 * 60)) / 1000);

    return [days, hours, mins, secs];
}

const formatTime = time => time.toString().padStart(2, '0');

let ticker = setInterval(() => {
    let now = new Date().getTime();

    let timeToStart = countdownStart - now;
    let countdownTimer = countdownEnd - now;

    // Countdown to hackathon start date
    if (timeToStart > 0) {
        let [days, hours, mins, secs] = timeRemaining(timeToStart);
        countdownElem.innerHTML = `${formatTime(days)}d:${formatTime(hours)}h:${formatTime(mins)}m:${formatTime(secs)}s`;

        return;
    }

    // Hackathon has started
    document.dispatchEvent(countdownBegin);
    let [, hours, mins, secs] = timeRemaining(countdownTimer);
    countdownElem.innerHTML = `${formatTime(hours)}h:${formatTime(mins)}m:${formatTime(secs)}s`;

    // Hackathon is about to end
    if (countdownTimer === HOUR_IN_MILLISECONDS) {
        document.dispatchEvent(hourLeft);
    }
    // Hackathon has ended
    else if (countdownTimer <= 0) {
        clearInterval(ticker);
        document.dispatchEvent(countdownStop);
    }
}, 1000);

// Flickity init
const carousel = document.querySelector('.main-carousel');

const flkty = new Flickity(carousel, {
    contain: true,
    wrapAround: true,
    autoPlay: true,
});
