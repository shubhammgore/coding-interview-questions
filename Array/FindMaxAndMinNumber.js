// Find Max and Min number in an Array

const array = [-1, 9, 3, -6, 35];

const max = array.reduce((cur, acc) => {
	return cur > acc ? cur : acc;
});

const min = array.reduce((cur, acc) => {
	return cur < acc ? cur : acc;
});

console.log('Min:', min); //-6
console.log('Max:', max); //35
