// Find length of duplicate elements in array

// let array = [1, 3, 5, 2, 1, 3, 6, 9, 7, 5, 6];
let array = [
	'a',
	'b',
	'c',
	'd',
	'd',
	'e',
	'a',
	'b',
	'c',
	'f',
	'g',
	'h',
	'h',
	'h',
	'e',
	'a',
];

//  unique array without duplicates

let unique = [...new Set(array)];
// console.log(unique);

// this array without duplicates
let duplicates = unique.map((value) => [
	value,
	array.filter((str) => str === value).length,
]);

console.log(duplicates);
