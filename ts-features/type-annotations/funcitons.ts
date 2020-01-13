

const add = (a: number, b: number): number => {
  return a + b;
};


// arrow funcitons
const subtract = (a: number, b: number): number => {
  return a - b;
};

// named funciton
function divide(a: number, b: number): number {
  return a / b;
};

// anonymous funciton assigned to a variable
const multiply = function(a: number, b: number): number {
  return a * b;
};


// funcitons without return statements (void type)
// void type can also be used for funcitons tha return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// funtions that will NEVER execute completely because of errors thrown (never type)
const throwError = (message: string): never => {
  throw new Error(message);
};


// destructuring objects in function parameters with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather_WitoutDestructuring = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather_ES2015 = ({date , weather}): void => {
  console.log(date);
  console.log(weather);
};

const logWeather_WitDestructuring = ({date , weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

