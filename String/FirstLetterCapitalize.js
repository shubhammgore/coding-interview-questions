// Capitalize first letter of a word in sentence

const toTitleCase = (str) => {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

let result = toTitleCase('maRy hAd a lIttLe LaMb');
console.log(result);
