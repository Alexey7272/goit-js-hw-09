const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
};
let colorSwitch = null;

refs.btnStart.addEventListener('click', () => {
    refs.btnStart.setAttribute('disabled', true);
    refs.btnStop.removeAttribute('disabled');
    colorSwitch = setInterval(() => {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
    }, 1000);
});
    
refs.btnStop.addEventListener('click', () => {
    refs.btnStart.removeAttribute('disabled');
    refs.btnStop.setAttribute('disabled', true);
    clearInterval(colorSwitch);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};