let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let merged = numbers.concat(names);

numbers.sort((a, b) => b - a); // Descending order
names.sort(); // Alphabetical order

console.log("Merged:", merged);
console.log("Sorted Numbers:", numbers);
console.log("Sorted Names:", names);
