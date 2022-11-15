"use strict"


let form = document.querySelector('.addreview-block__form');

let inputName = document.querySelector('.addreview-name');

let inputGrade = document.querySelector('.addreview-grade');

let errorName = document.querySelector('.error-name');

let errorGrade = document.querySelector('.error-grade');

let reviewText = document.querySelector('.addreview-textarea');

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
localStorage.clear();
// console.log(name);
// console.log(grade);
// console.log(errorCount);
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
}

form.addEventListener('submit', submitForm);

inputName.addEventListener('focus', clearName);

inputGrade.addEventListener('focus', clearGrade);

form.addEventListener('input', handleInput);



function fill(element) { 
    document.querySelectorAll('textarea, input').forEach(function(e) {
        
        if(e.value === '')
        e.value = window.localStorage.getItem(e.name, e.value);
        
    })

}; 

document.addEventListener("DOMContentLoaded", fill);
