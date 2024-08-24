/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, Math.min(b, Math.min(c, d))));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.floor(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));
console.log(d | 0);

// Use Variables b + d To Get This Valus
console.log(((b | 0) / (d | 1)).toFixed(2)); // 66.67 => String
console.log(Number(((b | 0) / (d | 1)).toFixed(0))); // 67 => Number