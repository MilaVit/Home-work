const BUTTON = document.getElementById('button');
const TEXT = document.getElementById('text');

TEXT.style.fontSize = '22px';
TEXT.style.color = 'blue';
BUTTON.style.display = 'none';

window.addEventListener('load', userDataProcessing);
BUTTON.addEventListener('click', showButton);

function userDataProcessing() {
    let user = prompt('enter name', '');
   
    setCookie = () => document.cookie = "user=" + decodeURIComponent(`welcome ${user}`);
    setLocalStorage = () => localStorage.setItem('user',`welcome ${user}`);

    if(user === 'admin' || user === 'Admin'){
        setLocalStorage();
        setCookie();
        BUTTON.style.display = 'block';
        TEXT.innerText = `Добро пожаловать, ${user}`;
    } else if (user === '') {
        TEXT.innerText= 'Действие отменено! Невозможно войти в систему';
    } else if (user === null) {
        TEXT.innerText = 'Вы отменили действия, для продолжения работы нажмите кнопку F5';
    } else {
        TEXT.innerText = 'Данные не актуальны, или такого пользователя не найдено!'
    }
}

function showButton() {
let textCss = text.style.display == 'block';
let buttonCss = button.style.display == 'block';

if(textCss || buttonCss) {
    text.style.display = 'none';
    button.style.display = 'none';
}
window.history.go()
}