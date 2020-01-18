@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return 'This boat color is ' + this.color;
  }

  @logError('Ops, boat was sunk in the ocean')
  pilot(@parameterDecorator speed: string): void {
    
    if (speed === 'faset') {
      console.log('swish');
    } else {
      console.log('nothing')
    }

    throw new Error();
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function testDecorator(target: any, key: string): void {
    console.log('Target: ', target);
    console.log('Key: ', key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // console.log('Target: ', target);
    // console.log('Key: ', key);
  
    const method = desc.value;
    
    desc.value = function() {
      try {
        method();
      } catch(e) {
        console.log(errorMessage)
      }
    }
  }
}


// new Boat().pilot();


