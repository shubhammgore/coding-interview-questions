//  Reverse a String

function reverseString(str) {
	let reversed = '';

	for (let characters of str) {
		reversed = characters + reversed;
	}
	return reversed;
}

let rev = reverseString('Hello Shubham');
console.log(rev);
