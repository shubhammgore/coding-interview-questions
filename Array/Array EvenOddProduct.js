

// Javascript program to find product of elements
// at even and odd index positions separately


// Function to calculate product / sum
function EvenOddProduct(arr, n)
{
	let even = 1; // *for sum replace 1 with 0
	let odd = 1;

	for (let i = 0; i < n; i++) {

		// Loop to find even, odd product
		if (i % 2 == 0)
			even *= arr[i]; // *for sum of elements use +=
		else
			odd *= arr[i]; // for sum of elements use +=
	}

	console.log("Even Index Product : " + even);
	console.log("Odd Index Product : " + odd);
	
}

// Driver Code

	let arr = [ 1, 2, 3, 4, 5, 6 ];
	let n = arr.length;

	EvenOddProduct(arr, n);



