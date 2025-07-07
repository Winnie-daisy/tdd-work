// factorial.js

/**
 * factorial.js
 *
 * This file contains the implementation of the factorial function.
 *
 * Pair/Triplet: [Your Name Here] (e.g., John Doe)
 * You would list the names of your pair/triplet if you were working in a group.
 */

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The non-negative integer.
 * @returns {number} The factorial of n.
 * @throws {Error} If n is a negative number.
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default factorial; // Using ES module export