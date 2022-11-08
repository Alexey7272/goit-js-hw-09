import Notiflix, { Notify } from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] >= new Date ()) {
            refs.btnStart.removeAttribute('disabled');
        } else {
            refs.btnStart.setAttribute('disabled', true);
            Notify.failure('Please choose a date in the future');
        };
    },
};
const calendar = flatpickr('#datetime-picker', options);

const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    daysVal: document.querySelector('span[data-days]'),
    hoursVal: document.querySelector('span[data-hours]'),
    minsVal: document.querySelector('span[data-minutes]'),
    secsVal: document.querySelector('span[data-seconds]'),
};

refs.btnStart.addEventListener('click', timer);
refs.btnStart.setAttribute('disabled', true);

function timer(evt){
    const timerInterval =  setInterval(() => {
        
        const dateCalendar = calendar.selectedDates[0];
        let nowTime = new Date(); 
        let gapTime = dateCalendar - nowTime;

        const objDate = convertMs(gapTime);
        const {days, hours, minutes, seconds,} = objDate;
        
        refs.daysVal.textContent = pad(days),
        refs.hoursVal.textContent = pad(hours),
        refs.minsVal.textContent = pad(minutes),
        refs.secsVal.textContent = pad(seconds)
        refs.btnStart.setAttribute('disabled', true);
        refs.inputDate.setAttribute('disabled', true);

        if (gapTime < 1000) {
            clearInterval(timerInterval);
            refs.inputDate.removeAttribute('disabled');
            return;
        }; 
    }, 1000);
};

function pad(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
};