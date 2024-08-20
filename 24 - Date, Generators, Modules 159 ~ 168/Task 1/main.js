let diff = new Date() - new Date("dec 03, 03");

console.log(`${(diff / 1000).toFixed(0)} Seconds`);
console.log(`${(diff / 1000 / 60).toFixed(0)} Minutes`);
console.log(`${(diff / 1000 / 60 / 60).toFixed(0)} Hours`);
console.log(`${(diff / 1000 / 60 / 60 / 24).toFixed(0)} Days`);
console.log(`${(diff / 1000 / 60 / 60 / 24 / 365.25 * 12).toFixed(2)} Months`);
console.log(`${(diff / 1000 / 60 / 60 / 24 / 365.25).toFixed(2)} Years`);