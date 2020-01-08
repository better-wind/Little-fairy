let isDone: boolean = false;

console.log(isDone)

let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;


let x: [string, number];

x = ['2', 1];

let list: Array<number> = [];

list = [2]

function identity<T>(arg: T[]): T[] {
  arg.length
  return arg;
}

const a = identity([])
console.log(a);
