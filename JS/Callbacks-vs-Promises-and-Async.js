// Link of Article
// https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90

// Callbacks
function printString(string, callback) {
	setTimeout(() => {
		console.log(string);
		callback();
	}, Math.floor(Math.random() * 100) + 1);
}

// callbacks hell
// The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code.
function printAll() {
	printString('A', () => {
		printString('B', () => {
			printString('C', () => {});
		});
	});
}
printAll();

// --------------------------------------//

// Promise
// Promise's try to fix nesting problem

function printSritng(string) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(string);
		});
		Math.floor(Math.random() * 100 + 1);
	});
}

// Promise Chain
// This is called a Promise Chain. You can see that the
// code returns the result of the function (which will be a Promise),
// and this gets sent to the next function in the chain.

function printAll() {
	printString('A')
		.then(() => {
			return printString('B');
		})
		.then(() => {
			return printString('C');
		});
}
printAll();

// ---------------------------------------------------------//

// Await
// Await is basically syntactic sugar for Promises.
// It makes your asynchronous code look more like synchronous/procedural
// code, which is easier for humans to understand.

async function printAll() {
	await printSritng('A');
	await printSritng('B');
	await printSritng('C');
}

printAll();

// -----------------------------------------------------//

// let’s make a function that will concatenate the string and pass it on.

// Callback Style
function addString(previous, current, callback) {
	setTimeout(() => {
		callback(previous + ' ' + current);
	}, Math.floor(Math.random() * 100) + 1);
}

// Not so nice
function addAll() {
	addString('', 'A', (result) => {
		addString(result, 'B', (result) => {
			addString(result, 'C', (result) => {
				console.log(result); // Prints out " A B C"
			});
		});
	});
}
addAll();

//   ---------------------------- //

// Promise Style

function addString(previous, current) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(previous + ' ' + current);
		}, Math.floor(Math.random() * 100 + 1));
	});
}

// with arrow
function addAll() {
	addString('', 'A')
		.then((result) => addString(result, 'B'))
		.then((result) => addString(result, 'C'))
		.then((result) => {
			console.log(result); // Prints out " A B C"
		});
}
addAll();

//  Await with promise

async function addAll() {
	let toPrint = await addString('', 'A');
	toPrint = await addString(toPrint, 'B');
	toPrint = await addString(toPrint, 'C');
}
addAll();
