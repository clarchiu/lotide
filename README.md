# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kelelenceu/lotide`

**Require it:**

`const _ = require('@kelelenceu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([...])` : returns first element of an array
* `tail([...])` : returns all elements except the first element of an array
* `middle([...])` : returns the middle element(s) of an array as an array
* `countLetters(string)`: returns number of occurences of each letter in a string as an object
* `countOnly(allItems, itemsToCount)`: returns the number of occurences of the items in itemsToCount in allItems
* `eqArrays(a, b)`: returns true if a and b are identical arrays
* `eqObjects(a, b)`: returns true if a and b are identical objects
* `findKey(obj, predicate)`: returns the key in obj that satisfies predicate
* `findKeyByValue(obj, value)`: returns the key in obj with the specified value
* `flatten([...])`: returns a flattened version of an array
* `letterPositions(string)`: returns the positions in which each character of a string occured as an object
* `map([...], mapping)`: returns a new array populated with the results of calling a provided function on every element in the calling array
* `takeUntil([...], callback)`: returns a new array populated with elements of the calling array until the callback returns true for the element
* `without([...], unwanted)`: returns a new array with all the elements of the calling array except the unwanted element