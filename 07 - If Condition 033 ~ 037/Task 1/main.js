// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

console.log(num < 10 ? "00" + num : num < 100 ? "0" + num : `${num}`);