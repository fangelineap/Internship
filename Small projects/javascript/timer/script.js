let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('[data-time');

function timer(seconds) {
    // clear any existing timer kl mau set timer baru
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000)
}

// fungsi untuk memperlihatkan waktu pertama sebelum countdown berjalan
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSec = seconds % 60;
    let display = `${minutes}:${remainderSec < 10 ? '0' : ''}${remainderSec}`;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    // merubah timestamp menjadi format date time
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    /* for those who arent a european kata tutorialnya
    but i'm an asian and i still understand this so use whatever 
    u're comfortable with :D */
    // endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes <  10 ? '0' : ''}${minutes}`;
    endTime.textContent = `Be back at ${hour}:${minutes <  10 ? '0' : ''}${minutes}`;

}

timerButtons.forEach(button => {
    button.addEventListener('click', function () {
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    });
});
// timer(1023);

// kita dapat langsung melakukan selection dengan menggunakan attribute name
const custom = document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})