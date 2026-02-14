"use strict";
// Type Aliases
// interface PostId = stringOrNumber
// Literal types
let myName;
// Type '"John"' is not assignable to type '"Dave"'
// myName = 'John'
let userName;
userName = 'Amy';
// Type '"Rachel"' is not assignable to type '"Dave" | "John" | "Amy"'.
// userName = 'Rachel';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
// Argument of type 'string' is not assignable to parameter of type
// logMsg(add('a', 'b'));
function subtract(c, d) {
    return c - d;
}
logMsg(subtract(9, 6));
// interface MathFunction {
//   (a: number, b: number): number;
// }
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    //type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log('addAll', addAll(2, 3));
console.log('sumAll', sumAll(2, 2));
// Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMessage) => {
    throw new Error(errMessage);
};
const infinite = () => {
    let i = 0;
    while (true) {
        console.log('The type is going to be never');
        if (i > 10) {
            console.log('When the infinite loop is stopped the type is void');
            break;
        }
    }
};
// custom type guard
const isNumber = (param) => {
    return typeof param === 'number' ? true : false;
};
// use of never type
const numberOrString = (param) => {
    if (typeof param === 'string')
        return 'string';
    if (isNumber(param))
        return 'number';
    return createError('This should never happen');
};
logMsg(numberOrString('testing string'));
logMsg(numberOrString(2));
// logMsg(numberOrString(undefined));
