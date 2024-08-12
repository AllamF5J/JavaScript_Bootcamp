let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// ! Write 3 Solutions

// Solution 1: Using indexOf() method
console.log(haystack.indexOf(needle) !== -1 ? "Found" : "Not Found");

// Solution 2: Using findIndex() method
console.log(haystack.findIndex(item => item === needle) !== -1 ? "Found" : "Not Found");

// Solution 3: Using for loop
for (let i = 0; i < haystack.length; i++) {
  if (haystack[i] === needle) {
    console.log("Found");
  }
}