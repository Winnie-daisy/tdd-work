// test/factorial.test.js by Aber Winnie Daisy and Namusobya Edna

import { expect } from 'chai';
import factorial from '../factorial.js'; // Note the .js extension and ES import

describe('factorial', () => {
  // Test cases for the factorial function

  it('should return 1 for 0!', () => {
    expect(factorial(0)).to.equal(1);
  });

  it('should return 1 for 1!', () => {
    expect(factorial(1)).to.equal(1);
  });

  it('should return 2 for 2!', () => {
    expect(factorial(2)).to.equal(2);
  });

  it('should return 6 for 3!', () => {
    expect(factorial(3)).to.equal(6);
  });

  it('should return 24 for 4!', () => {
    expect(factorial(4)).to.equal(24);
  });

  it('should return 120 for 5!', () => {
    expect(factorial(5)).to.equal(120);
  });

  it('should handle larger numbers correctly (e.g., 10!)', () => {
    expect(factorial(10)).to.equal(3628800);
  });

  // Test case for negative numbers (error handling)
  it('should throw an error for negative numbers', () => {
    expect(() => factorial(-1)).to.throw('Factorial is not defined for negative numbers.');
    expect(() => factorial(-5)).to.throw('Factorial is not defined for negative numbers.');
  });
});