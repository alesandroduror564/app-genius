/*
Filename: complex_code.js
Description: This complex code demonstrates a multi-step process to generate a Fibonacci sequence with memoization.
*/

// Generate the Fibonacci sequence using memoization
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Calculate the sum of all even Fibonacci numbers below a given limit
function sumEvenFibonacci(limit) {
  let sum = 0;
  let i = 1;
  let fib = 0;

  while (fib <= limit) {
    fib = fibonacci(i);

    if (fib % 2 === 0) {
      sum += fib;
    }

    i++;
  }

  return sum;
}

// Print the sum of all even Fibonacci numbers below 4 million
console.log(
  `The sum of all even Fibonacci numbers below 4 million is: ${sumEvenFibonacci(
    4000000
  )}`
);

// Output: The sum of all even Fibonacci numbers below 4 million is: 4613732

// Additional code can be added below to extend the complexity and functionality.