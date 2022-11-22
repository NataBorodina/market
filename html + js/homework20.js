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

// function getNameOfMonth(month) {
//     if (month === 0) return 'Январь';
//     if (month === 1) return ('Февраль');
//     if (month === 2) return ('Март');
//     if (month === 3) return ('Апрель');
//     if (month === 4) return ('Май');
//     if (month === 5) return ('Июнь');
//     if (month === 6) return ('Июль');
//     if (month === 7) return ('Август');
//     if (month === 8) return ('Сентябрь');
//     if (month === 9) return ('Октябрь');
//     if (month === 10) return ('Ноябрь');
//     if (month === 11) return ('Декабрь');
//     else {
//         alert ("Введите корректное значение месяца");
//     }
// }
// let value = +prompt("Введите порядковый номер месяца от 0 до 11");
// let monthName = getNameOfMonth(value);
// console.log(monthName);

// for (let month=0; month<=11; month++) {
//     if (month === 9) continue;
//     console.log (getNameOfMonth(month));
// }

// Упражнение 3(a)

function getNameOfMonth(month) {
    switch (month) {
        case 0:
            return ('Январь');

        case 1:
            return ('Февраль');

        case 2:
            return ('Март');

        case 3:
            return ('Апрель');

        case 4:
            return ('Май');

        case 5:
            return ('Июнь');

        case 6:
            return ('Июль');

        case 7:
            return ('Август');

        case 8:
            return ('Сентябрь');

        case 9:
            return ('Октябрь');

        case 10:
            return ('Ноябрь');

        case 11:
            return ('Декабрь');

        default:
            alert("Введите корректное значение месяца");
    }
}

let value = +prompt("Введите порядковый номер месяца от 0 до 11");
let monthName = getNameOfMonth(value);
console.log(monthName);

for (let month = 0; month <= 11; month++) {
    if (month === 9) continue;
    console.log(getNameOfMonth(month));
}
