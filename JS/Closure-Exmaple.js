// CLosure Example

function lazy_sum(arr) {
	var sum = function () {
		return arr.reduce(function (x, y) {
			return x + y;
		});
	};
	return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
console.log('CLosure Output:-', f()); // 15
