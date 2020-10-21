// Filtering arrays with filter
function myFilter(array, test) {
  let passed = [];

  for (let el of array) {
    if (test(el)) {
      passed.push(el);
    }
  }
  return passed;
}

let array = [1, 2, 3, 4, 5, 6];

//console.log(myFilter(array, (el) => el % 2 === 0));
//console.log(array.filter((el) => el % 2 === 0));

//Transforming arrays with map
function myMap(array, f) {
  let transformed = [];

  for (let el of array) {
    transformed.push(f(el));
  }
  return transformed;
}

//console.log(myMap([1, 2, 3], (el) => el * 2));

//Summarizing with reduce
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
// Strings and characters code
// Two emoji characters, horse and shoe
let horseShoe = '🐴👟';
//console.log(horseShoe.length);
// → 4
//console.log(horseShoe[0]);
// → (Invalid half-character)
//console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
//console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
let roseDragon = '🌹🐉';
for (let char of roseDragon) {
  //console.log(char);
}
// → 🌹
// → 🐉

// EXERCISES

//*********Flattening***********
//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

//console.log(arrays.reduce((a, b) => a.concat(b), []));

//YOUR OWN LOOP
//Write a higher-order function loop that provides something like a for loop statement.
//It takes a value, a test function, an update function, and a body function.
//Each iteration, it first runs the test function on the current loop value and stops if that returns false.
//Then it calls the body function, giving it the current value.
//Finally, it calls the update function to create a new value and starts from the beginning.

//When defining the function, you can use a regular loop to do the actual looping.

// Your code here.
function loop(value, testf, updatef, bodyf) {
  for (let i = value; testf(i); i = updatef(i)) {
    bodyf(i);
  }
}
//loop(3,(n) => n < 100,(n) => n * 2,  console.log);

//Everything
//Analogous to the some method, arrays also have an every method.
//This one returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

//Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.
function every(array, test) {
  return array.some((el) => test(el));
}
function every1(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}
//console.log(every1([1, 3, 5, 9], (n) => n < 10)); // → true

// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text.
//  Remember that each script object has a direction property that can be "ltr" (left to right),
// "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

function dominantDirection(text) {
  // Your code here.
}
