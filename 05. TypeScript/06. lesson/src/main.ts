// Type Assertions
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference
type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

// It could not be used in react
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat',
): number | string => {
  if (c === 'add') return a + b;

  return a.toString().concat(b.toString());
};

console.log(addOrConcat(2, 3, 'add'));
console.log(addOrConcat(2, 3, 'concat'));

// Type 'string | number' is not assignable to type 'string'.
// let myVal: string = addOrConcat(2, 3, 'concat')
let myVal: string = addOrConcat(2, 3, 'concat') as string;

//  // Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 3, 'concat') as number;

let correctVal: number = addOrConcat(2, 3, 'add') as number;

// 10 as string
// Double casting
10 as unknown as string;

// The DOM
const img = document.getElementById('#img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');
