const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;


// let result = letterPositions('hello');
// assertArraysEqual(result.h, [0]);
// assertArraysEqual(result.e, [1]);
// assertArraysEqual(result.l, [2,3]);
// assertArraysEqual(result.o, [4]);
