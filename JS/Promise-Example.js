// Promise example

// let promise = new Promise(function (resolve, reject) {
// 	resolve('done');

// 	reject(new Error('…')); // ignored
// 	setTimeout(() => resolve('…')); // ignored
// });

//////////////////////

function loadScript(src) {
	return new Promise(function (resolve, reject) {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => resolve(script);
		script.onload = () => reject(new Error('Script load error:' + src));

		document.head.append(script);
	});
}

let promise = loadScript(
	'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'
);

promise
	.then((script) => alert(`${script.src} is loaded`))
	.catch((error) => alert(`Error: ${error.message}`));

promise.then((script) => alert('One more handler to do something else'));
