"use strict"

// Упражнение 1

let test1 = {
    name: 'Ivan',
}

let test2 = {};


/**
     * Проверяет отсутствие у объекта свойств, возвращая true, иначе false.
     *
     * @param obj - имя объекта.
     * @return {Boolean} результат проверки в виде true или false.
     */
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(test1));
console.log(isEmpty(test2));

test2.name = 'Oleg';

console.log(isEmpty(test2));

// Упражнение 3

let salaries = {
    John: 100000, 
    Ann: 160000,
    Pete: 130000, 
};

/**
     * Увеличивает значение ключа объекта на perzent процентов.
     *
     * @param {Number} perzent - количество процентов.
     * @return {Number} значения ключей увеличенные на указанное количество процентов.
     */
function raiseSalary(perzent) {
    let newSalaries = {};

    for (let key in salaries) {
        newSalaries[key] = (Math.floor(salaries[key] + (salaries[key] / 100 * perzent)));
    }
    return newSalaries;
}

let raise = raiseSalary(5.7867)
console.log(salaries, raise); 

/**
     * Вычисляет сумму значений всех ключей.
     *
     * @param {Number} perzent - количество процентов.
     * @return {Number} значения ключей увеличенные на указанное количество процентов.
     */
function calcSum(obj) {
    let summ = 0;
    for (let key in obj) {
        summ += obj[key];
    }
    return summ;
}

console.log(calcSum(salaries), calcSum(raise));  
