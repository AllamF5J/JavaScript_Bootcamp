/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name, age, available;

  if (typeof a === "boolean") {
    available = a;
    name = typeof b === "string" ? b : c;
    age = typeof b === "string" ? c : b;
  } else if (typeof b === "boolean") {
    available = b;
    name = typeof a === "string" ? a : c;
    age = typeof a === "string" ? c : a;
  } else {
    available = c;
    name = typeof a === "string" ? a : b;
    age = typeof a === "string" ? b : a;
  }

  const availabilityStatus = available ? "Available" : "Not Available";
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${availabilityStatus} For Hire`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"