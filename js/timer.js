const timer = () => {//инкапсуляция
    const daysBlock = document.querySelector('.timer__days');
    const hoursBlock = document.querySelector('.timer__hours');
    const minutesBlock = document.querySelector('.timer__minutes');
    const secondsBlock = document.querySelector('.timer__seconds');
    const zeroRed = document.querySelector('.main-display__timer');

    let interval;

    const numWord = (value, words) => {
        value = Math.abs(value) % 100; // нет отрицательных чисел и видим меньше 100
        const lastNum = value % 10; // важна последняя цифра

        if (value > 10 && value < 20) return words[2];
        if (lastNum > 1 && lastNum <5) return words[1];
        if (lastNum === 1) return words[0];
        return words[2];
    };

    const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date('27 april 2022 01:26:23').getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days < 10 ? '0' + days : days;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;

    daysBlock.textContent = fDays;
    daysBlock.nextElementSibling.textContent = numWord(days, ['день', 'дня', 'дней']);
    hoursBlock.textContent = fHours;
    hoursBlock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов']);
    minutesBlock.textContent = fMinutes;
    minutesBlock.nextElementSibling.textContent = numWord(minutes, ['минута', 'минуты', 'минут']);
    secondsBlock.textContent = fSeconds;
    secondsBlock.nextElementSibling.textContent = numWord(seconds, ['секунда', 'секунды', 'секунд']); //следующий блог по верстке

        if (timeRemaining <= 0) {
        clearInterval(interval)
        daysBlock.textContent = '00';
        hoursBlock.textContent = '00';
        minutesBlock.textContent = '00';
        secondsBlock.textContent = '00';  
        
        zeroRed.style.color = 'red'; // По истечению таймера красные цифры
        
        daysBlock.nextElementSibling.textContent = 'дней';
        hoursBlock.nextElementSibling.textContent = 'часов';
        };
    };

    updateTimer();
    interval = setInterval(updateTimer, 500);
};
timer();



/*
const hoursBlock = document.querySelector('.timer__hours');
const minutesBlock = document.querySelector('.timer__minutes');
const secondsBlock = document.querySelector('.timer__seconds');

const updateTimer = () => {
const date = new Date();
const dateDeadline = new Date('25 april 2022').getTime();
const timeRemaining = (dateDeadline - date)/1000;

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const fHours = hours < 10 ? '0' + hours : hours;
const fMinutes = minutes < 10 ? '0' + minutes : minutes;
const fSeconds = seconds < 10 ? '0' + seconds : seconds;

hoursBlock.textContent = fHours;
minutesBlock.textContent = fMinutes;
secondsBlock.textContent = fSeconds;

console.log(timeRemaining);
};

updateTimer();
setInterval(updateTimer, 500);

const date = new Date().getTime();
const dateDeadline = new Date('25 april 2022').getTime();

console.log(date);
console.log(dateDeadline);
console.log(dateDeadline-date);
*/