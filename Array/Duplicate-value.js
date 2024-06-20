// Print common numbers from both array
// input: [1,2,3,4,1], [1,4,2,5]
// Output: [1,2,4]
function common(arr1, arr2) {
    return arr1.filter((element, index) => 
        arr2.includes(element) && arr1.indexOf(element) === index
    );
}

console.log(common([1,2,3,4,1], [1,4,2,5])); // Output: [1, 2, 4]