//CLOSURE
/* function wrapper(exponent) {
  return (base) => Math.pow(base, exponent);
}

let exponent2 = wrapper(2);
let exponent3 = wrapper(3);

console.log(exponent3(4));

 */

//RECURSION
/* function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `${history} + 5`) ||
        find(current * 3, `${history} * 3`)
      );
    }
  }
  return find(1, '1');
}
console.log(findSolution(24)); */

//FUNCTION NAMING
/* function paddingNumber(quantity, animal) {
  let stringedLabel = String(quantity);
  while (stringedLabel.length < 3) {
    stringedLabel = '0' + stringedLabel;
  }
  return console.log(`${stringedLabel} ${animal}`);
}

function farmInventory(cows, chickens) {
  paddingNumber(cows, 'Cows');
  paddingNumber(chickens, 'Chickens');
}

farmInventory(3, 10);
 */

/* function isEven(number) {
  if (number === 0) return true;
  else if (number === 1) return false;
  else if (number < 0) return isEven(-number);
  else if (number > 1) return isEven(number - 2);
}

console.log(isEven(12));
 */

function countChar(string, char) {
  let charNumber = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      charNumber++;
    }
  }
  return charNumber;
}
function countBs(string) {
  return countChar(string, 'B');
}
console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
