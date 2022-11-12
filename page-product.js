"use strict"


let form = document.querySelector('.addreview-block__form');

let inputName = document.querySelector('.addreview-name');

let inputGrade = document.querySelector('.addreview-grade');

let errorName = document.querySelector('.error-name');

let errorGrade = document.querySelector('.error-grade');

function submitForm(event) {

    event.preventDefault();
    let name = inputName.value;
    let grade = inputGrade.value;
    let errorCount = 0;

    if (name.length < 2) {
        errorCount = errorCount + 1;
        errorName.style.visibility = "visible";
        errorName.innerText = 'Имя не может быть короче 2-х символов';
    };

    if (name.length === 0) {
        errorCount = errorCount + 1;
        errorName.style.visibility = "visible";
        errorName.innerText = 'Вы забыли указать имя и фамилию';
    };

    if (grade.length === 0) {
        errorCount = errorCount + 1;
        errorGrade.style.visibility = "visible";
    };

    if (isNaN(grade)) {
        errorCount = errorCount + 1;
        errorGrade.style.visibility = "visible";
    };

    if (grade < 1 || grade > 5) {
        errorCount = errorCount + 1;
        errorGrade.style.visibility = "visible";
    };

    if (errorCount > 1) {
        errorGrade.style.visibility = 'hidden';
    };

console.log(name);
console.log(grade);
console.log(errorCount);
return;
};

function clearGrade(event) {
    errorGrade.style.visibility = 'hidden';
};

function clearName(event) {
    errorName.style.visibility = 'hidden';
};

form.addEventListener('submit', submitForm);

inputName.addEventListener('focus', clearName);

inputGrade.addEventListener('focus', clearGrade);
