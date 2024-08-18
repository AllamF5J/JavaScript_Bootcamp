let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let numbers = chars.filter(item => typeof item === "number");
let nonNumbers = chars.filter(item => typeof item !== "number");
let myNewArray = [...numbers, ...nonNumbers];

console.log(myNewArray.copyWithin(0, numbers.length, Math.pow(numbers.length, 2)));