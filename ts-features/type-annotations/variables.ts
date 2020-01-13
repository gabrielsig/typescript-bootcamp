// primitives
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothingMuchAgain: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let grades: number[] = [8, 9, 9.5, 7.8];
let flags: boolean[] = [true, true, false];

// classes
class Car {
  numberOfWheels: number = 4
}
let myCar: Car = new Car();


// object literal
let point: {x: number; y: number; isActive: boolean} = {
  x: 10,
  y: 20,
  isActive: true
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};


// when to use type annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: {x: number, y: number} = JSON.parse(json);

// 2) Declare variable in a line and initialize it later
let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) variable whose type cannot be infered
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
