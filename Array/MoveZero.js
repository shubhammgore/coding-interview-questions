const moveZeros = (arr) => {
	let c = 0;
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		if (arr[i] !== 0) {
			[arr[i], arr[c]] = [arr[c], arr[i]];
			c++;
		}
	}
	return arr;
};

console.log(moveZeros([0, 6, 8, 0, 3, 04, 9, 10, 4, 3]));
