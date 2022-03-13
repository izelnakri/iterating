# Iteration

Few simple iterator functions that operate on the iterator in a memory efficient way.

# Installation

```sh
npm install iterating --save
```

```js
import ArrayIterator, { from } from 'iterating';

let set = new Set([1, 3, 5, 2, 1, 1, 3, 4]);
let iterator = from(set);

let firstOccurance = ArrayIterator.find(iterator, (x) => x === 5);
let lastItem = ArrayIterator.last(from(set));
let evenNumbers = ArrayIterator.filter(from(set), (x) => x % 2 === 0);
```
