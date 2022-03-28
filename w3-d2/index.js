// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// forms the first ten entries of the fibonacci series.


//Iterative Solution
function fibonacci(n) {
	const fib = [1, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	return fib[fib.length - 1];
}

fibonacci(4); //3
fibonacci(5); //5
fibonacci(8); //21
fibonacci(10); //55