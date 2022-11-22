let form = document.querySelector('.addreview-block__form');

let inputName = document.querySelector('.addreview-name');
let inputGrade = document.querySelector('.addreview-grade');
let reviewText = document.querySelector('.addreview-textarea');

let errorName = document.querySelector('.error-name');
let errorGrade = document.querySelector('.error-grade');

let basketButton = document.querySelector('.offer__basket-button');
let basketСounter = document.querySelector('.basket-icon__count');
let basketАmount = document.querySelector('.basket-icon__number');

function fillBasket(event) {

    console.log(localStorage.getItem('inBasket'));

    if (localStorage.getItem('inBasket')) {
        inBasket = JSON.parse(localStorage.getItem('inBasket'));
    };

};

function fill(event) {
    document.querySelectorAll('textarea, input').forEach(function (e) {

        if (e.value === '')
            e.value = window.localStorage.getItem(e.name, e.value);
    });
};

function submitForm(event) {

    event.preventDefault();
    let name = inputName.value;
    let grade = inputGrade.value;
    let errorCount = 0;

    if (name.length < 2) {
        errorName.style.visibility = "visible";
        errorName.innerText = 'Имя не может быть короче 2-х символов';
        inputName.style.borderColor = "#DA4A0C";

    } else if (name.length === 0) {
        errorName.style.visibility = "visible";
        errorName.innerText = 'Вы забыли указать имя и фамилию';
        inputName.style.borderColor = "#DA4A0C";
    } else {
        errorCount = errorCount + 1;
    }

    if (grade.length === 0) {
        errorGrade.style.visibility = "visible";
        inputGrade.style.borderColor = "#DA4A0C";

    } else if (isNaN(grade)) {
        errorGrade.style.visibility = "visible";
        inputGrade.style.borderColor = "#DA4A0C";
    } else if (grade < 1 || grade > 5) {
        errorGrade.style.visibility = "visible";
        inputGrade.style.borderColor = "#DA4A0C";
    } else {
        errorCount = errorCount + 1;
    }

    if (errorCount === 0) {
        errorGrade.style.visibility = 'hidden';
    };

    if (errorCount === 2) {
        inputName.value = "";
        inputGrade.value = "";
        reviewText.value = "";

        document.querySelectorAll('textarea, input').forEach(function (e) {
            window.localStorage.setItem(e.name, e.value);
        })
        console.log(localStorage);
    };
};

function clearGrade(event) {
    errorGrade.style.visibility = 'hidden';
    inputGrade.style.borderColor = "black";
};

function clearName(event) {
    errorName.style.visibility = 'hidden';
    inputName.style.borderColor = "black";
};

function handleInput(event) {
    let id = event.target.getAttribute('name');
    let text = event.target.value;
    console.log(id, text);

    localStorage.setItem(id, text);
    console.log(localStorage.getItem(id));
};

function addBasket(event) {
    event.preventDefault();

    if (inBasket.includes('iPhone 13') === true) {

        inBasket.splice((inBasket.indexOf(1)), 1);
        basketButton.innerText = 'Добавить в корзину';
        basketСounter.style.visibility = 'hidden';

        localStorage.setItem('inBasket', JSON.stringify(inBasket));
        console.log(inBasket);

    } else {
        inBasket.push('iPhone 13');
        basketButton.innerText = 'Товар уже в корзине';
        basketСounter.style.visibility = 'visible';
        basketАmount.innerText = inBasket.length;
        localStorage.setItem('inBasket', JSON.stringify(inBasket));

        console.log(inBasket);
        return;
    };
};

let inBasket = [];
if (localStorage.getItem('inBasket')) {
    inBasket = JSON.parse(localStorage.getItem('inBasket'));
};

if (inBasket.length == 0) {
    basketButton.innerText = 'Добавить в корзину';
    basketСounter.style.visibility = 'hidden';
} else {
    basketButton.innerText = 'Товар уже в корзине';
    basketСounter.style.visibility = 'visible';
    basketАmount.innerText = inBasket.length;
};


form.addEventListener('submit', submitForm);

inputName.addEventListener('focus', clearName);

inputGrade.addEventListener('focus', clearGrade);

form.addEventListener('input', handleInput);

basketButton.addEventListener('click', addBasket);

document.addEventListener("DOMContentLoaded", fillBasket);

document.addEventListener("DOMContentLoaded", fill);


