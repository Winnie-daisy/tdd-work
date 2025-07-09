// fibonacci.js

/**
 * Fibonacci Sequence Calculation
 *
 * This file contains the implementation of the fibonacci function,
 * evolved using a Test-First Test Driven Development (TDD) approach.
 *
 * Pair/Triplet: [ABER WINNIE DAISY AND NAMOSOMBYA EDNA] 
 */

// Initial minimal function to pass the first test
function fibonacci(n) {
  if (n===0) {
     return 0; 
  }
 if (n===1){
    return 1;
 }
 return 0;
}

export default fibonacci;