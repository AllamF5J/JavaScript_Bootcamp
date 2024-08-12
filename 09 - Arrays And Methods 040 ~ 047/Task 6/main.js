let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
console.log(arr1.concat(arr2).sort().splice(arr2.length).join("").toLowerCase()); // fxy