let myName: string = 'John';
let meaning: number;
let isLoading: boolean;
let album: any;

myName = 'Peter';
meaning = 24;
isLoading = true;
album = 5150;

function sum(a: number, b: number): number {
  return a + b;
}
sum(3, 5);

let postId: string | number; // union type
let isActive: number | boolean;

let re: RegExp = /\w+/g;
