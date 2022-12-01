"use strict"

// Упражнение 1

function getSumm(arr) {
    let arrNumbers = arr.filter(function (numbers) {
        return typeof numbers === "number";
    });
    let result = arrNumbers.reduce((sum, current) => sum + current, 0);
    return result;
};

let arr1 = [1, 2, 10, 11, 5,];
console.log(getSumm(arr1));

let arr2 = ["a", {}, 3, 3, -2];
console.log(getSumm(arr2));

let test = [{}, [], true, 5, 0,]
console.log(getSumm(test));

// Упражнение 3

let cart = [4884];

function addToCart(product) {
let inCart = cart.includes(product);

if (inCart) return;

cart.push(product);
};

addToCart(3456);
console.log(cart); // [4884, 3456]

addToCart(3456);
console.log(cart); // [4884, 3456]

function removeFromCart(product) {
    cart = cart.filter (function(id) {
        return id !== product;
    });
};

removeFromCart(4884); 
console.log(cart); // [3456]
