
 // reverseWords in a string

var Words = 'The quick brown fox jumps over the lazy dog.'

// output: 'ehT kciuq nworb xof spmuj revo eht yzal .god'


function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(
	word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseWords(Words))


// https://levelup.gitconnected.com/javascript-algorithm-reverse-words-9ddae3a3ba39
// for solution