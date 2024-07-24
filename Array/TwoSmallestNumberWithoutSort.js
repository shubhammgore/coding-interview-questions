function findTwoSmallestNumbers(arr) {
    if (arr.length < 2) {
        throw new Error("Array should have at least two elements");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        // If current number is smaller than the smallest number found so far
        if (num < smallest) {
            // Update second smallest to be the smallest
            secondSmallest = smallest;
            // Update smallest to be the current number
            smallest = num;
        }
        // If current number is not smaller than smallest but is smaller than second smallest
        else if (num < secondSmallest) {
            // Update second smallest to be the current number
            secondSmallest = num;
        }
    }
    return [smallest, secondSmallest];
}

// Example usage:
let arr = [51, 10, 93, 50, 32, 78, -1];
let [smallest, secondSmallest] = findTwoSmallestNumbers(arr);
console.log(`The two smallest numbers are: ${smallest} and ${secondSmallest}`);
// Output : The two smallest numbers are: -1 and 10
