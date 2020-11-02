const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("should not modify original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it("should return empty array for array with one element", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("should return empty array for empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});