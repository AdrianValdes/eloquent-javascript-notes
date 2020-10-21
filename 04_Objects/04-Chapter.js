function reverseArray(array) {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
//console.log(reverseArray(['A', 'B', 'C']));

let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arrayValue) {
  for (let i = 0; i < Math.floor(arrayValue.length / 2); i++) {
    let temp = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
    arrayValue[arrayValue.length - 1 - i] = temp;
  }
  //return arrayValue;
}
reverseArrayInPlace(arrayValue);
//console.log(arrayValue);

//LISTS
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
//console.log(arrayToList([10, 20]));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return (list = { value, rest: list });
}

function nth1(list, position) {
  for (let i = 0; i < position; i++) {
    if (!list) return undefined;
    list = list.rest;
  }
  return list.value;
}
//recursive version
/* function nth(list, position) {
  if (!list) return undefined;
  else if (position === 0) return list.value;
  else return nth(list.rest, position - 1);
} */

console.log(nth1(arrayToList([10, 20, 30]), 5));
