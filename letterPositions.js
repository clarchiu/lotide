const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let index = 0; index < sentence.length; index ++) {
    let char = sentence[index];
    if (char === ' ') {
      continue;
    }
    if (results[char]) {
      results[char].push(index);
    } else {
      results[char] = [index];
    }
  }
  return results;
};


let result = letterPositions('hello');
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2,3]);
assertArraysEqual(result.o, [4]);

console.log(letterPositions("lighthouse in the house"));
