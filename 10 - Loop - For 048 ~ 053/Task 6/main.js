let start = 0;
let swappedName = "elZerO";
let varName = [];

for (let i = start; i < swappedName.length; i++) {
  varName[i] = swappedName[i] === swappedName[i].toUpperCase() ? swappedName[i].toLowerCase() : swappedName[i].toUpperCase();
}

console.log(varName.join(""));