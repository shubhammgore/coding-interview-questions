//  Remove Duplicates in Array

// function removeDuplicates(array) {
// 	return [...new Set(array)];
// }

function removeDup(arr) {
	let tempArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (tempArr.indexOf(arr[i]) < 0) {
			tempArr.push(arr[i]);
		}
	}
	console.log(tempArr);
}
let sortArr = removeDup([2, 2, 5, 6, 8, 2, 6, 3, 4, 10, 8, 9, 5, 25]);
console.log(sortArr);
