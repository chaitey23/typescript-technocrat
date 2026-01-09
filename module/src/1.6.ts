// learning function
// normal function
// arrow function

function add(num1: number, num2: number): number {
    return num1 + num2
}
add(5, 9)
console.log(add(5, 9));

const addArrow = (num1: number, num2: number): number => num1 + num2
const array: number[] = [1, 9, 87]
const newArray = array.map((elem: number): number => elem * elem) 