export class Attributes<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set = (update: T): void => {
    // copy all the fields form the 'update'object and to the 'this.data' object
    Object.assign(this.data, update);
  }

  getAll = (): T => {
    return this.data;
  }
}