"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// It could not be used in react
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return a.toString().concat(b.toString());
};
console.log(addOrConcat(2, 3, 'add'));
console.log(addOrConcat(2, 3, 'concat'));
// Type 'string | number' is not assignable to type 'string'.
// let myVal: string = addOrConcat(2, 3, 'concat')
let myVal = addOrConcat(2, 3, 'concat');
//  // Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 3, 'concat');
let correctVal = addOrConcat(2, 3, 'add');
// 10 as string
// Double casting
10;
// The DOM
const img = document.getElementById('#img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
