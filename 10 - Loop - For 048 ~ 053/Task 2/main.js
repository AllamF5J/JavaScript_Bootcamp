let start = 10;
let end = 0;
let stops = 3;

for (let i = start; i >= stops; i--) {
  console.log(i < start ? `${end}${i}` : `${i}`);
}