let myString = "EElllzzzzzzzeroo";

console.log(myString.split("").filter((ele, index) => myString.indexOf(ele) === index).join("")); // Elzero