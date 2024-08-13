let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

console.log(numsAndStrings.filter(ele => !isNaN(ele)).map(ele => -ele)); // [-1, -10, 10, 20, -5, -3]