// get unique and common data from array

// let arr = [2, 4, 6, 2, 5, 6, 4 ]

// unique output :- [2, 4, 6, 5]
// Common Data Output:- [2, 4]

let arr = [2, 4, 6, 2, 5, 6, 4];

let unique = [];
let common = [];

let valueCount = {};

// unique value
arr.forEach((num) => {
    if (valueCount[num]) {
        valueCount[num]++;
    } else {
        valueCount[num] = 1;
        unique.push(num);
    }
});
// for duplicate/ common value
for (let num in valueCount) {
    if (valueCount[num] > 1) {
        common.push(parseInt(num));
    }
}

console.log("Unique Value: ", unique);
console.log("Comman Value: ", common);
