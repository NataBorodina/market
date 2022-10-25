"use strict"

// Упражнение 1

for (let a = 0; a <= 20; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
}

// Упражнение 2

let calcSum = 0;

for (let i = 0; i < 3; i++) {
    let value = +prompt('Введите число');
    if (!value) alert('Ошибка, вы ввели не число');
    if (!value) break;

    calcSum += value;
}

console.log('Сумма введеных чисел: ' + calcSum);

// Упражнение 3

function getNameOfMonth(month) {
    if (month === 0) {
        return ('Январь');
    } else if (month === 1) {
        return ('Февраль');
    } else if (month === 2) {
        return ('Март');
    } else if (month === 3) {
        return ('Апрель');
    } else if (month === 4) {
        return ('Май');
    } else if (month === 5) {
        return ('Июнь');
    } else if (month === 6) {
        return ('Июль');
    } else if (month === 7) {
        return ('Август');
    } else if (month === 8) {
        return ('Сентябрь');
    } else if (month === 9) {
        return ('Октябрь');
    } else if (month === 10) {
        return ('Ноябрь');
    } else if (month === 11) {
        return ('Декабрь');
    } else {
        alert ("Введите корректное значение месяца")
    }
}
let value = +prompt("Введите порядковый номер месяца от 0 до 11");
let monthName = getNameOfMonth(value);
console.log(monthName);

for (let month=0; month<=11; month++) {
    if (month === 9) continue;
    console.log (getNameOfMonth(month));
}
