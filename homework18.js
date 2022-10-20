"use strict"

// Упражнение 1

let a = "100px";
let b = "323px";

a = parseInt(a);
b = parseInt(b);

let result = a + b;
console.log(result); //423

// Упражнение 2

console.log(Math.max(10, -45, 102, 36, 12, 0, -1)); //102

// Упражнение 3

let c = 123.3399;
console.log(Math.round(c)); //123

let d = 0.111;
console.log(Math.ceil(d)); //1

let e = 45.333333
console.log(+e.toFixed(1)); //45.3

let f = 3;
console.log(Math.pow (f, 5)); //243

let g = 400000000000000;
console.log(4e14);

let h = "1" !== 1;
console.log(h); //true

// Упражнение 4 : ошибка в точности вычислений для чисел с плавающей точкой

console.log(0.1 + 0.2 === 0.3); //false

let sum = 0.1 + 0.2;
console.log((+sum.toFixed(1)) === 0.3); //true
