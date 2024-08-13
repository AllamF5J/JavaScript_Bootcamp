function checkStatus(a, b, c) {
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

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"