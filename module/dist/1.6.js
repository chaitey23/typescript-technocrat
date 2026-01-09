"use strict";
// learning function
// normal function
// arrow function
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
add(5, 9);
console.log(add(5, 9));
const addArrow = (num1, num2) => num1 + num2;
const array = [1, 9, 87];
const newArray = array.map((elem) => elem * elem);
