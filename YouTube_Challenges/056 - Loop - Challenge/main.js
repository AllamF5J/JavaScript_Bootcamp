/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let numOfAdmins = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  numOfAdmins++;
}

document.write(`<div>We Have ${numOfAdmins} Admins</div>`);

for (let i = 0; i < numOfAdmins; i++) {
  let s = 0;
  document.write(`<hr>
    <div>
    The Admin For Team ${i + 1} Is ${myAdmins[i]}
    <h3>Team Members: </h3>
  `);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      ++s;
      document.write(`<p>- ${s} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>
  `);
}