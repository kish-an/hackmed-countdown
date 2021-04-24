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

// Helper functions
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

// Custom events
const countdownBegin = new Event('countdownBegin');
document.addEventListener('countdownBegin', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>';
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
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>';
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

const workshop2 = new Event('workshop2');
document.addEventListener('workshop2', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>';
    flkty.remove(flkty.getCellElements());
    const cells = [
        createCell(`Join the discord to keep an eye on annoucements 👀`),
        createCell(`Check in at the #check-in channel on discord 🎟`),
        createCell('Cyberselves workshop begins at 13:00pm 🤖')
    ];
    flkty.append(cells);
}, { once: true });

const dayLeft = new Event('dayLeft');
document.addEventListener('dayLeft', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>';
    countdownElem.style.fontSize = '10rem';
    flkty.remove(flkty.getCellElements());
    const cells = [
        createCell(`Join the discord to keep an eye on annoucements 👀`),
        createCell('Use the #mentor-help channel on discord if you need any help! 🙋‍♀️'),
        createCell('Add songs to the HackMed spotify playlist! 🎵')
    ];
    flkty.append(cells);
}, { once: true });

const workshop3 = new Event('workshop3');
document.addEventListener('workshop3', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>';
    countdownElem.style.fontSize = '10rem';
    flkty.remove(flkty.getCellElements());
    const cells = [
        createCell(`Join the discord to keep an eye on annoucements 👀`),
        createCell('Start-ups come from Hackathons workshop begins at 16:00pm!'),
        createCell('Use the #mentor-help channel on discord if you need any help! 🙋‍♀️')
    ];
    flkty.append(cells);
}, { once: true });

const workshop4 = new Event('workshop4');
document.addEventListener('workshop4', () => {
    titleElem.innerHTML = '<h2><span class="siren">🚨</span> Hacking ends in... </h2>';
    countdownElem.style.fontSize = '10rem';
    console.log('hello');
    flkty.remove(flkty.getCellElements());
    const cells = [
        createCell(`Join the discord to keep an eye on annoucements 👀`),
        createCell('Use the #mentor-help channel on discord if you need any help! 🙋‍♂️'),
        createCell('Need a break? Come join us for some Pictionary at 19:00pm 🎨')
    ];
    flkty.append(cells);
}, { once: true });

// Update page every second
let ticker = setInterval(() => {
    let now = new Date().getTime();

    let timeToStart = countdownStart - now;
    let countdownTimer = countdownEnd - now;
    console.log(countdownTimer);

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
    if (countdownTimer <= 0) {
        clearInterval(ticker);
    }
    // 1 hour left
    else if (countdownTimer <= 3600000) {

    }
    //
    else if (countdownTimer <= ) {

    }
     // 2 hours left
    else if (countdownTimer <= 7200000) {

    }
    // 20 hours left (evening activity)
    else if (countdownTimer <= 72000000) {
       document.dispatchEvent(workshop4);
    }
    // 23 hours left (workshop 3)
    else if (countdownTimer <= 82800000) {
        document.dispatchEvent(workshop3);
    }
    // 23h:59m:59s left (1 day left)
    else if (countdownTimer <= (DAY_IN_MILLISECONDS - 1000)) {
        document.dispatchEvent(dayLeft);
    }
    // 26 hours left (workshop 2)
    else if (countdownTimer <= 93600000) {
        document.dispatchEvent(workshop2)
    }
    // 27.5 hours left (workshop 1)
    else if (countdownTimer <= 99000000) {
        document.dispatchEvent(workshop1);
    }
    // 28 hours left (Hackathon started)
    else if (countdownTimer <= 100800000) {
        document.dispatchEvent(countdownBegin);
    }

}, 1000);
