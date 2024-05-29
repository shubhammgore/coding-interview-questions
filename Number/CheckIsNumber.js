function isInt(num) {
    return num % 1 === 0;
  }
  console.log(isInt(15));    // Output: true
  console.log(isInt(15.5)); // Output: false