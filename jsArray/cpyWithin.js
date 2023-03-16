// The copyWithin() method copies array elements to another position in the array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2); //array.copyWithin(target, start, end)

console.log(fruits);