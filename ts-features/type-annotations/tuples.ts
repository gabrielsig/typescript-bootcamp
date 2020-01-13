const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// tuples representing the properties of the object
const pepsi: [string, boolean, number] = ['brown', true, 40];

// using type alias
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 35];
const tea: Drink = ['clear', false, 0];

