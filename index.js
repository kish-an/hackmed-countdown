const countdownStart = new Date('April 24, 2021 10:00:00').getTime();
const countdownEnd = new Date('April 25, 2021 14:00:00').getTime();
const countdownElem = document.getElementById('countdown');
const titleElem = document.querySelector('h2');
const carouselElem = document.querySelector('.main-carousel');
const DAY_IN_MILLISECONDS = 86400000;

// Flickity init
const carousel = document.querySelector('.main-carousel');

const flkty = new Flickity(carousel, {
    contain: true,
    wrapAround: true,
    autoPlay: 8000,
});

const timeRemaining = duration => {
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((duration % (1000 * 60)) / 1000);

    return [days, hours, mins, secs];
}

const formatTime = time => time.toString().padStart(2, '0');

const createCell = text => {
    const div = document.createElement('div');
    div.textContent = text;
    div.className = 'carousel-cell';

    return div;
}

const countdownBegin = new Event('countdownBegin');
document.addEventListener('countdownBegin', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>'
    // Remove current carousel cells
    flkty.remove(flkty.getCellElements());
    // Add new cells
    const cells = [
        createCell(`Join the discord to keep an eye on annoucements 👀`),
        createCell(`Can't find a team? Join our team building event!`),
        createCell(`Check in at the #check-in channel on discord 🎟`)
    ];
    flkty.append(cells);
}, { once: true });

const workshop1 = new Event('workshop1');
document.addEventListener('workshop1', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>'
    // Remove current carousel cells
    flkty.remove(flkty.getCellElements());
    // Add new cells
    const cells = [
        createCell(`Join the discord to keep an eye on annoucements 👀`),
        createCell(`Can't find a team? Join our team building event!`),
        createCell(`Check in at the #check-in channel on discord 🎟`),
        createCell(`Skills for Innovation workshop starts at 11:30am!`)
    ];
    flkty.append(cells);
}, { once: true });

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

    // Update countdown timer
    let [days, hours, mins, secs] = timeRemaining(countdownTimer);
    countdownElem.innerHTML = `${days === 0 ? '' : `${formatTime(days)}d:`}${formatTime(hours)}h:${formatTime(mins)}m:${formatTime(secs)}s`;

     // Hackathon has ended
    if (countdownTimer < 0) {
        clearInterval(ticker);
    }
     // 2 hours left
    else if (countdownTimer < 7200000) {

    }
    else if (countdownTimer < 68400000) {
        flkty.remove(flkty.getCellElements());
        const cells = [
            createCell(`Join the discord to keep an eye on annoucements 👀`),
            createCell('Use the #mentor-help channel on discord if you need any help! 🙋‍♂️'),
            createCell('Need a break? Come join us for some Pictionary at 19:00pm 🎨')
        ];
        flkty.append(cells);
    }
    else if (countdownTimer < 82800000) {
        flkty.remove(flkty.getCellElements());
        const cells = [
            createCell(`Join the discord to keep an eye on annoucements 👀`),
            createCell('Start-ups come from Hackathons workshop begins at 16:00pm!'),
            createCell('Use the #mentor-help channel on discord if you need any help! 🙋‍♀️')
        ];
        flkty.append(cells);
    }
    // 23h:59m:59s left
    else if (countdownTimer < (DAY_IN_MILLISECONDS - 1000)) {
        countdownElem.style.fontSize = '10rem';
    }
    else if (countdownTimer < 93600000) {
        console.log('yes');
        flkty.remove(flkty.getCellElements());
        const cells = [
            createCell(`Join the discord to keep an eye on annoucements 👀`),
            createCell(`Check in at the #check-in channel on discord 🎟`),
            createCell('Cyberselves workshop begins at 13:00pm 🤖')
        ];
        flkty.append(cells);
    }
    // Carousel messages for workshops
    else if (countdownTimer < 99000000) {
        document.dispatchEvent(workshop1);
    } else if (countdownTimer < 100800000) {
        document.dispatchEvent(countdownBegin);
    }
    
}, 1000);
