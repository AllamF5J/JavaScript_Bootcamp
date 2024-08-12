let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0, j = 0; i < friends.length; i++) {
  if (!friends[i].toLowerCase().startsWith(letter.toLowerCase())) {
    console.log(`${++j} => ${friends[i]}`);
  }
}