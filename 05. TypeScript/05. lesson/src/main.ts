// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber

// Literal types
let myName: 'Dave';
// Type '"John"' is not assignable to type '"Dave"'
// myName = 'John'

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';
// Type '"Rachel"' is not assignable to type '"Dave" | "John" | "Amy"'.
// userName = 'Rachel';

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));
// Argument of type 'string' is not assignable to parameter of type
// logMsg(add('a', 'b'));

function subtract(c: number, d: number): number {
  return c - d;
}

logMsg(subtract(9, 6));

//
type MathFunction = (a: number, b: number) => number;
// interface MathFunction {
//   (a: number, b: number): number;
// }
let multiply: MathFunction = (a, b) => {
  return a * b;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number) => {
  //type guard
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// default value
const sumAll = (a: number, b: number, c: number = 2) => {
  return a + b + c;
};

console.log('addAll', addAll(2, 3));
console.log('sumAll', sumAll(2, 2));

// Rest parameters

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

const createError = (errMessage: string): never => {
  throw new Error(errMessage);
};

const infinite = () => {
  let i: number = 0;
  while (true) {
    console.log('The type is going to be never');
    if (i > 10) {
      console.log('When the infinite loop is stopped the type is void');
      break;
    }
  }
};

// custom type guard
const isNumber = (param: any): boolean => {
  return typeof param === 'number' ? true : false;
};

// use of never type
const numberOrString = (param: string | number): string => {
  if (typeof param === 'string') return 'string';
  if (isNumber(param)) return 'number';
  return createError('This should never happen');
};

logMsg(numberOrString('testing string'));
logMsg(numberOrString(2));
// logMsg(numberOrString(undefined));
