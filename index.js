const sec1Button = document.querySelector('#sec1-button');
const sec2Button = document.querySelector('#sec2-button');
const sec3Button = document.querySelector('#sec3-button');
const sec4Button = document.querySelector('#sec4-button');
const buttons = [sec1Button, sec2Button, sec3Button, sec4Button];

sec1Button.addEventListener('click', () => {
    buttonInactive(buttons)
    buttonActive(sec1Button)
});

sec2Button.addEventListener('click', () => {
    buttonInactive(buttons)
    buttonActive(sec2Button)
});

sec3Button.addEventListener('click', () => {
    buttonInactive(buttons)
    buttonActive(sec3Button)
});

sec4Button.addEventListener('click', () => {
    buttonInactive(buttons)
    buttonActive(sec4Button)
});

function buttonActive(button) {
    button.classList.add('active');
    console.log(button)
}

function buttonInactive(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) { 
            buttons[i].classList.remove('active'); 
        }
        console.log(buttons[i]);
    }
}