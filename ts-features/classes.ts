class Vehicle {
  color: string;
  
  constructor(color: string) {
    this.color = color
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  wheels: number;

  constructor(wheels: number, color: string) {
    super(color);
    this.wheels = wheels;
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    console.log('starting engine...')
    this.drive()
    this.honk()
  }
}


const car = new Car(4, 'orange');
car.startDrivingProcess();

console.log(car.color)