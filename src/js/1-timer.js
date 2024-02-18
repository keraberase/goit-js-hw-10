// commonjs


// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
    
// Описаний у документації
import iziToast from "izitoast";     
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
let countdownInterval;
let isTimerStarted = false;
const input = document.querySelector("input#datetime-picker")
const daysDisplay = document.querySelector('[data-days]');
const hoursDisplay = document.querySelector('[data-hours]');
const minutesDisplay = document.querySelector('[data-minutes]');
const secondsDisplay = document.querySelector('[data-seconds]');

// використання бібліотеки flatpicker
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    onClose: function (selectedDates) {
        const selectedDate = selectedDates[0];
        const today = new Date();
// перевірка валдності дати  
        if (selectedDate <= today) {
            document.querySelector('button[data-start]').disabled = true;
// бібліотека iziToast для відображення повідомлення 
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
                position: 'topCenter'
            });
        } else {
            document.querySelector('button[data-start]').disabled = false;
        }
    },
   
};

flatpickr(input, options);


const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

startBtn.addEventListener('click', function () {
// валідація щоб запобігти користувачу від вибору нової дати після старту зворотного відліку
    if (isTimerStarted) {
       return;
    }

isTimerStarted = true;

    const selectedDate = new Date(input.value);

    countdownInterval = setInterval(function () {
            const now = new Date();
            const timeDiff = selectedDate - now;

            if (timeDiff <= 0) {
                clearInterval(countdownInterval);
                daysDisplay.textContent = "00";
                hoursDisplay.textContent = "00";
                minutesDisplay.textContent = "00";
                secondsDisplay.textContent = "00";
                isTimerStarted = false;
            startBtn.disabled = true;
                return;
            }
 const timeRemaining = convertMs(timeDiff);
            daysDisplay.textContent = addLeadingZero(timeRemaining.days);
            hoursDisplay.textContent = addLeadingZero(timeRemaining.hours);
            minutesDisplay.textContent = addLeadingZero(timeRemaining.minutes);
            secondsDisplay.textContent = addLeadingZero(timeRemaining.seconds);
        }, 1000);

        this.disabled = true;
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
        return value < 10 ? "0" + value : value.toString();
};


