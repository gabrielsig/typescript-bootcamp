// arrays type inference
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// also works on 2D arrays
const carsByMake = [
  ['F150'],
  ['Corolla'],
  ['Camaro']
];

// help with inference when extracting values
const car = carMakers[0];
const myNewCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map', 'forEach', 'reduce' and etc
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// arrays with flexible types
let importantDates: (Date | string)[] = [];
importantDates = [new Date(), '2020-01-01'];

const importantDates_WithInference = [new Date(), '2020-01-01'];
