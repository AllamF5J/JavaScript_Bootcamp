function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  }
  else {
    console.log(`Years => ${(theAge).toFixed(2)} Year`);
    console.log(`Months => ${(theAge * 12).toFixed(2)} Month`);
    console.log(`Weeks => ${(theAge * 365.25 / 7).toFixed(2)} Week`);
    console.log(`Days => ${(theAge * 365.25).toFixed(2)} Day`);
    console.log(`Hours => ${(theAge * 365.25 * 24).toFixed(2)} Hour`);
    console.log(`Minutes => ${(theAge * 365.25 * 24 * 60).toFixed(2)} Minute`);
    console.log(`Seconds => ${(theAge * 365.25 * 24 * 60 * 60).toFixed(2)} Second`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months