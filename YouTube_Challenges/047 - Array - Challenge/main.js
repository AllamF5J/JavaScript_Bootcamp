/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my = my.reverse().slice(my.indexOf("Osama"));

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Elham"), counter)); // ["Elham", "Mazero"]

console.log(my[my.indexOf("Elham")].slice(zero, counter - zero.toString().length) +
            my[counter - zero.toString().length].slice(counter - zero.toString().length)); // "Elzero"

console.log(my[counter - zero.toString().length].slice(counter + zero.toString().length, my[my.indexOf("Elham")].length) +
            my[counter - zero.toString().length].slice(my[my.indexOf("Elham")].length).toUpperCase()); // "rO"