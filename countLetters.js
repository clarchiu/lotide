const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  let letterCounts = {};
  for (let char of sentence) {
    if (char === ' ') {
      continue;
    }
    if (letterCounts[char]) {
      letterCounts[char]++;
    } else {
      letterCounts[char] = 1;
    }
  }
  return letterCounts;``
}

console.log(countLetters("lighthouse in the house"));