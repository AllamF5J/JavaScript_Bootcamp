let nums = [2, 12, 11, 5, 10, 1, 99];

console.log(nums.reduce((acc, current) => current % 2? acc + current : acc * current, 1)); // 500