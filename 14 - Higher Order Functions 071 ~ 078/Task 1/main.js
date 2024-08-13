let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

console.log(mix.map((ele) => isNaN(ele) ? ele : "").reduce((acc, current) => `${acc}${current}`)); // Elzero