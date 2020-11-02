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

module.exports = countLetters;