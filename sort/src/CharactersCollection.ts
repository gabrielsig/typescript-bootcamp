import {Sorter} from './Sorter';

export class CharactersCollection extends Sorter{
  data: string;
   
  constructor(data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftChar = this.data[leftIndex].toLocaleLowerCase();
    const rightChar = this.data[rightIndex].toLocaleLowerCase();
    return leftChar > rightChar;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;

    this.data = characters.join('');
  }
}