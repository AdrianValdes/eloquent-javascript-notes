//STRICT MODE
//'use strict';
counter = 10;
// console.log(counter);

//TYPES
//Learn about typescript

//Testing
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test('convert Latin text to uppercase', () => {
  return 'hello'.toUpperCase() == 'HELLO';
});
test('convert Greek text to uppercase', () => {
  return 'Χαίρετε'.toUpperCase() == 'ΧΑΊΡΕΤΕ';
});
test("don't convert case-less characters", () => {
  return 'مرحبا'.toUpperCase() == 'مرحبا';
});

//Exceptions
/* function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new Error('Invalid direction: ' + result);
}

function look() {
  if (promptDirection('Which way?') == 'L') {
    return 'a house';
  } else {
    return 'two angry bears';
  }
}

try {
  console.log('You see', look());
} catch (error) {
  console.log('Something went wrong: ' + error.message);
}
 */

//EXERCISES
//RETRY
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure('Klunk');
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        throw error;
      }
    }
  }
}
// console.log(reliableMultiply(8, 8));

//The locked box
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};
function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}
