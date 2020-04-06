// array.reduce(callback, initialValue);

// Numbers
const numbersArray = [1, 2, 3, 4];

// String
const letterArray = ['r', 'e', 'd', 'u', 'c', 'e', 'r'];

const reducerCallback = (accumulator, item) => {
  // console.log('accumulator, item:', accumulator, item);
  return accumulator + item;
};

const total = numbersArray.reduce(reducerCallback, 0);
const newString = letterArray.reduce(reducerCallback, '');

console.log('New string is:', newString);
console.log('total is:', total);
