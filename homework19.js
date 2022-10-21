"use strict"

// Упражнение 1

let a = '$100'
let b = '300$'
let summ = (+a.slice(1) + (+b.slice(0, 3)));
console.log(summ); //400

// Упражнение 2

let message = ' привет, медвед      ';
message = message.trim();
message = (message[0].toUpperCase() + message.slice(1));
console.log(message); // “Привет, медвед”

// Упражнение 3

let age = prompt('Сколько вам лет?');

if (+age >= 0 && +age <=3) {
    alert(`Вам ${age} лет и вы младенец`);
  } else if (+age >= 4 && +age <=11) {
    alert(`Вам ${age} лет и вы ребенок`);
  } else if (+age >= 12 && +age <=18) {
    alert(`Вам ${age} лет и вы подросток`);
  } else if (+age >= 19 && +age <=40) {
    alert(`Вам ${age} лет и вы познаёте жизнь`);
  } else if (+age >= 41 && +age <=80) {
    alert(`Вам ${age} лет и вы познали жизнь`);
  } else if (+age >= 81) {
    alert(`Вам ${age} лет и вы долгожитель`);
  } else {
    alert(`Введите корректное значение`);
  }

// Упражнение 4

let messageNew = 'Я работаю со строками как профессионал!';
let count = messageNew.split(/\s+/);;
console.log(count); // 6
