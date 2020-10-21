// Methods
/* Methods are nothing more than properties 
that hold function values.
 This is a simple method: */
/* 
const rabbit = {};
rabbit.speak = (line) => console.log(`The rabbit says ${line}`);

rabbit.speak('I am alive'); */

const rabbit = {};
function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}
const whiteRabbit = { type: 'wite', speak };
const hungryRabbit = { type: 'hungry', speak };

// whiteRabbit.speak('hello');
// hungryRabbit.speak('I am hungryyy');

// **************** this ****************
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
// normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]

// PROTOTYPES
// console.log(Object.getPrototypeOf({}) == Object.prototype);
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} says ${line}`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
// killerRabbit.speak('blood');

//CLASSES
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let weirdRabbit = new Rabbit('weird');
let blackRabbit = new Rabbit('black');
// weirdRabbit.speak('fuzzy');
Rabbit.prototype.teeth = 'small';
// console.log(weirdRabbit.teeth);

//MAP
let agesObject = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};
let ages = new Map();
ages.set('Boris', 39);
ages.set('Liang', 22);
ages.set('Julia', 62);

console.log(`Julia is ${ages.get('Julia')}`);
