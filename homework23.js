"use strict"

// // Упражнение 1 (вариант 1)

let count = prompt('Введите число');

let intervalId = setInterval(() => {

    if (isNaN(count)) {
        console.log('Ошибка! Вы ввели не число');
        clearInterval(intervalId);
    } else {
        count = count - 1;
        if (count >= 1) {
            console.log('Осталось ' + count);
        }
        if (count === 0) {
            console.log('Время вышло!');
            clearInterval(intervalId);
        }
    }
}, 1000);


// Упражнение 1 (вариант 2)


let count = prompt('Введите число');

let promise = new Promise((resolve, reject) => {

    let intervalId = setInterval(() => {
        count = count - 1;
        if (count >= 1) {
            console.log('Осталось ' + count);
        }
        if (count === 0) {
            clearInterval(intervalId);
            resolve('Время вышло!');
        }
    }, 1000);

    if (isNaN(count)) {
        reject((new Error('Ошибка! Вы ввели не число')));
    };
});

promise.then(
    (result) => {
        console.log(result);
    },

    (error) => {
        console.log(error);
    }
);

// Упражнение 3

console.time('Скорость выполнения');

let promise = fetch("https://reqres.in/api/users");

promise
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        let users = response.data;
        console.log('Получили пользователей: ' + (users.length));
        users.forEach(function (user) {
            console.log(`- ${user.first_name} ${user.last_name} (${user.email})`)
        })
    });

console.timeEnd('Скорость выполнения');