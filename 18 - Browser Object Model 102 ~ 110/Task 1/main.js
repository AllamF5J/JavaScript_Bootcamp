let proMsg = prompt("Print Number From – To").split("-");
let min = Math.min(proMsg[0], proMsg[1]);
let max = Math.max(proMsg[0], proMsg[1]);

for (let i = min; i <= max; i++) {
  console.log(i);
}