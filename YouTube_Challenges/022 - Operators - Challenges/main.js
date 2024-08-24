// ! Challenge 1 

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 100
/*
  [++a] [+]:
    [++a]
    - Value: 11
    - Explanation: 'a' is pre-incremented, so it becomes 11 before being used.
    [+] 
    - Explanation: Addition operator.

  [+b++] [+]:
    [+b++]
    - Value: 20
    - Explanation: The unary plus converts 'b' from a string to a number (20). The post-increment means 'b' is incremented after being used, so it becomes 21 after this operation.
    [+] 
    - Explanation: Addition operator.

  [+c++] [-]:
    [+c++]
    - Value: 80
    - Explanation: The unary plus converts 'c' to a number (80). The post-increment means 'c' is incremented after being used, so it becomes 81 after this operation.
    [-] 
    - Explanation: Subtraction operator.

  [+a++]:
    [+a++]
    - Value: 11
    - Explanation: 'a' is used as 11 due to the unary plus, and then post-incremented to 12.
*/

//! a = 12    b = 21    c = 81
console.log(++a + -b + +c++ + a++ + +a); // 100
/* 
  [++a] [+]:
    [++a]
    - Value: 13
    - Explanation: Pre-increment increases 'a' to 13 before being used.
    [+] 
    - Explanation: Addition operator.

  [-b] [+]:
    [-b]
    - Value: -21
    - Explanation: The unary minus changes the sign of 'b', making it -21.
    [+] 
    - Explanation: Addition operator.

  [+c++] [+]:
    [+c++]
    - Value: 81
    - Explanation: The unary plus converts 'c' to a number (81). The post-increment means 'c' is incremented after being used, so it remains 81 here, but becomes 82 afterwards.
    [+] 
    - Explanation: Addition operator.

  [a++] [+]:
    [a++]
    - Value: 13
    - Explanation: The unary plus doesn't change the value since 'a' is already a number (13). The post-increment means 'a' is incremented after being used, so it remains 13 here, but becomes 14 afterwards.
    [+] 
    - Explanation: Addition operator.

  [+a]:
    [+a]
    - Value: 14
    - Explanation: The unary plus is used on 'a', which is now 14.
*/

//! a = 14    b = 21    c = 82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
/* 
  [--c] [+]:
    [--c]
    - Value: 81
    - Explanation: Pre-decrement decreases 'c' from 82 to 81 before being used.
    [+] 
    - Explanation: Addition operator.

  [+b] [+]:
    [+b]
    - Value: 21
    - Explanation: The unary plus converts 'b' to a number, but since it's already a number, 'b' remains 21.
    [+] 
    - Explanation: Addition operator.

  [--a * +b++] [-]:
    [--a]
    - Value: 13
    - Explanation: Pre-decrement decreases 'a' from 14 to 13 before being used.
    [+b++]
    - Value: 21
    - Explanation: The unary plus doesn't change the value of 'b', and 'b' remains 21 during this operation, but it's incremented to 22 afterward.
    [*] 
    - Explanation: Multiplication operator. This step multiplies 13 (from 'a') by 21 (from 'b++'), resulting in 273.

  [- +b * a] [+]:
    [+b]
    - Value: 22
    - Explanation: After the previous post-increment, 'b' is now 22.
    [* a]
    - Value: 14
    - Explanation: 'a' is still 14 after being decremented to 13 in a previous step.
    [-] 
    - Explanation: Subtraction operator. This step subtracts the result of multiplying 22 by 14 (308) from the current result.

  [--a] [-]:
    [--a]
    - Value: 12
    - Explanation: Pre-decrement decreases 'a' from 13 to 12 before being used.
    [-] 
    - Explanation: Subtraction operator.

  [- +true]:
    [+true]
    - Value: 1
    - Explanation: The unary plus converts the boolean `true` to the number 1.
    [-] 
    - Explanation: Subtraction operator.
*/

// ! Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++f + ++e * ++g); // 173