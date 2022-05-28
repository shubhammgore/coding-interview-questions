// Deep copy recursively

const createDeepCopy = (input) => {
	if (typeof input !== 'object') {
		return input; // BAse CASE
	}

	let copy = Array.isArray(input) ? [] : {};

	for (key in input) {
		const value = input[key];
		copy[key] = createDeepCopy(value);
	}

	return copy;
};

/// example

const player = {
	FirstNAme: 'John',
	lastName: 'Doe',
	location: {
		city: 'Tampa',
		state: 'Florida',
	},
	score: [28, 18, 21, 15],
};

// Testing function
let copy = createDeepCopy(player);
// Update nested values
copy.location.city = 'Orlando';
copy.score[0] = 15;

// Side by side comparison
console.log('original', player);
console.log('copy', copy);
