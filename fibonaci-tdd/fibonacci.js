// fibonacci.js

/**
 * Fibonacci Sequence Calculation
 *
 * This file contains the implementation of the fibonacci function,
 * evolved using a Test-First Test Driven Development (TDD) approach.
 *
 * Pair/Triplet: [Aber Winnie Daisy and Namusombya Edna] 
 */

/**
 * Calculates the nth Fibonacci number.
 * Assumes n is a non-negative integer.
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @returns {number} The nth Fibonacci number.
 * @throws {Error} If n is a negative number.
 */
function fibonacci(n) {
  if (n < 0) {
    throw new Error('Fibonacci is not defined for negative numbers.');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Iterative solution (more efficient than naive recursion for larger n)
  // This would typically be a refactoring step after the recursive solution
  // is proven correct by passing tests.
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;

  // // Original recursive solution (commented out after refactoring)
  // return fibonacci(n - 1) + fibonacci(n - 2);
}

export default fibonacci;