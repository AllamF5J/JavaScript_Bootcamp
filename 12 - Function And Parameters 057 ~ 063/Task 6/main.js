function multiply(...arg) {
  let result = 1;
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === "string") {
      continue;
    }
    else {
      result *= !Number.isInteger(arg[i]) ? Math.trunc(arg[i]) : arg[i];
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
