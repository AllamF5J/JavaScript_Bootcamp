function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let i = zName.trim().indexOf(" ");
    return `${zName.slice(0, i)} ${zName.slice(i + 1, i + 2).toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    return `${parseInt(zAge)}`;
  }

  function countryTwoLetters(zCountry) {
    return `${zCountry.toUpperCase().slice(0, 2)}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY