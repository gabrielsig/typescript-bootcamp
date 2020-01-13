// export interface Sortable {
//   length: number;
//   compare(i: number, j: number): boolean;
//   swap(i: number, j: number): void;
// }

export abstract class Sorter {
  // collection: Sortable;

  // constructor(collection: Sortable) {
  //   this.collection = collection;
  // }

  abstract length: number;
  abstract compare(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;

  sort(): void {
    const length = this.length;
    
    for(let i = 0; i < length; i++){
      for(let j = 0; j < length - i - 1; j++){

        if(this.compare(j, j + 1)){
          this.swap(j, j + 1);
        }
        
      }
    }
  }
}