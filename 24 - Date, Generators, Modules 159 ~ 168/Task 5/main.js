let start = new Date()

for (let i = 1; i < 10000; i++) {
  document.write(`${i}<br>`);
}
let end = new Date();

console.log(`Loop Took ${end - start} Milliseconds`);