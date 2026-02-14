"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
// stringArr[0] = 42
// stringArr.push(42)
stringArr[0] = 'John';
stringArr.push('hey');
// guitars[0] = true;
guitars[0] = 1984;
guitars.unshift('Jim');
// stringArr = guitars
// guitars = mixedData;
guitars = stringArr;
mixedData = guitars;
let test = [];
// Type 'never[]' is not assignable to type 'string'.
// let bands: string = [];
let bands = [];
bands.push('Van Halen');
// Tuple
// let myTuple: [string, number, boolean]
let myTuple = ['Dave', 42, true];
// let mixed: (string | number | boolean)[]
let mixed = ['John', 1, false];
mixed = myTuple;
// Target requires 3 element(s) but source may have fewer
// myTuple = mixed
// Type '42' is not assignable to type 'undefined'.
// myTuple[3] = 42
myTuple[1] = 42;
/* OBJECTS */
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
// exampleObj.prop1 = 42
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    // active: true,
    albums: ['1', '2', '4'],
};
evh = jp;
const greetingGuitarist = (guitarist) => {
    // 'guitarist.name' is possibly 'undefined'.ts(18048)
    // return `Hello ${guitarist.name.toUpperCase()}!`;
    // Narrowing
    // https://www.typescriptlang.org/docs/handbook/2/narrowing.html
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello';
};
console.log(greetingGuitarist(jp));
// Enums
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade);
