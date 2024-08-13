let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(myArray.reduce((acc, current) => acc.concat(current), []).join("")) // Elzero