"use strict"

// Упражнение 1 (вариант 1)

let count = prompt('Введите число');

if (isNaN(count)) {
    console.log('Ошибка! Вы ввели не число');
} else {

    let intervalId = setInterval(() => {
        console.log('intervalId', intervalId)

        count = count - 1;
        if (count >= 1) {
            console.log('Осталось ' + count);
        }
        if (count === 0) {
            console.log('Время вышло!');
            clearInterval(intervalId);
        }
    }, 1000);
};

// let count = 10; // пример из лекции
// let intervalId = setInterval(() => {
//     console.log('intervalId', intervalId)
//     count = count - 1;
//     console.log(count);
//     if (count===5) {
//         clearInterval(intervalId);}
//     }, 1000);


// Упражнение 1 (вариант 2)


let count = prompt('Введите число');

let promise = new Promise((resolve, reject) => {


    if (isNaN(count)) {
        reject((new Error('Ошибка! Вы ввели не число')));
    } else {

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

// // Упражнение 2

// console.time('Скорость выполнения');

// let promise = fetch("https://reqres.in/api/users");

// promise
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         let users = response.data;
//         console.log('Получили пользователей: ' + (users.length));
//         users.forEach(function (user) {
//             console.log(`- ${user.first_name} ${user.last_name} (${user.email})`)
//         })
//     });

// console.timeEnd('Скорость выполнения');
