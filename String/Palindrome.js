//  Palindrome

function isPalindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}
let Palindrome = isPalindrome('nayan');

console.log(Palindrome);
