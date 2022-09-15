const pizzaArray = ["potato", "tomato", "banana", "banana"];

const set = new Set(pizzaArray);
console.log(set);

const arrayAgain = Array.from(set);
console.log(arrayAgain);