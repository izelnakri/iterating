export function from(set) {
  return set[Symbol.iterator]();
}

export function filter(iterator, predicate) {
  let result = [];
  for (let element in iterator) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

export function find(iterator, predicate) {
  for (let element in iterator) {
    if (predicate(element)) {
      return element;
    }
  }
}

export function at(iterator, index) {
  let currentIndex = 0;
  for (let element in iterator) {
    if (currentIndex === index) {
      return element;
    }
    currentIndex++;
  }
}

export function last(iterator) {
  let value;
  for(value of iterator);
  return value;
}

// map, reduce, includes, findIndex(?),
