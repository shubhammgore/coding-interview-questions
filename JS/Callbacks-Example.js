// Callbacks

function printSritng(string, callback) {
	setTimeout(() => {
		console.log(string);
		callback();
	});
	Math.floor(Math.random() * 100 + 1);
}
