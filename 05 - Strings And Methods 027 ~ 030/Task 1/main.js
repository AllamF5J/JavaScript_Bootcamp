let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.startsWith("E" , 0) ? "e" : "not e"); // e
console.log(userName.split("", 1)[0].toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee