// Duplicate classes only for different types
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

// generic class that accepts any type as argument
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

// arrays built with the specific classes
const numberArray = new ArrayOfNumbers([1, 2, 4, 5]);
const stringArray = new ArrayOfStrings(['a', 'b', 'c'])
// arrays built with the generic class 
const numberArray2 = new ArrayOfAnything<number>([1, 2, 4, 5]);
const stringArray2 = new ArrayOfAnything<string>(['a', 'b', 'c']);
// arrays built with the generic class with type inference
const numberArray3 = new ArrayOfAnything([1, 2, 4, 5]);
const stringArray3 = new ArrayOfAnything(['a', 'b', 'c']);

// Examples of generics with funcitons
function printStrings(arr: string[]): void {
  for (let item of arr){
    console.log(item);
  }
}

function printNumbers(arr: number[]): void {
  for (let item of arr){
    console.log(item);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let item of arr){
    console.log(item);
  }
}

printNumbers([1, 2, 4, 5]);
printStrings(['a', 'b', 'c']);

printAnything<number>([1, 2, 4, 5]);
printAnything<string>(['a', 'b', 'c']);

printAnything([1, 2, 4, 5]);
printAnything(['a', 'b', 'c']);

// Generic constraints
class Car {
  print() {
    console.log('I am a Car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let item of arr){
    item.print();
  }
}

printHousesOrCars<number>([1, 2, 3, 4, 5]);
printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);