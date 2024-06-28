console.group("Group 1");

console.log("Message One");
console.log("Message Two");

  console.group("Child Group");

  console.log("Message One");
  console.log("Message Two");

    console.group("Grand Child Group");

    console.log("Message One");
    console.log("Message Two");

    console.groupEnd(); // Closing Grand Child Group

  console.groupEnd(); // Closing Child Group

console.groupEnd(); // Closing Group 1 

console.group("Group 2");

console.log("Message One");
console.log("Message Two");

console.groupEnd(); // Closing Group 2

