// test/fibonacci.test.js

import { expect } from 'chai';
import fibonacci from '../fibonacci.js';

describe('fibonacci', () => {
  it('should return 0 for fibonacci(0)', () => {
    expect(fibonacci(0)).to.equal(0);
  });

  it('should return 1 for fibonacci(1)', () => {
    expect(fibonacci(1)).to.equal(1);
  });

  it('should return 1 for fibonacci(2)', () => {
    expect(fibonacci(2)).to.equal(1);
  });

  it('should return 2 for fibonacci(3)', () => {
    expect(fibonacci(3)).to.equal(2);
  });

  it('should return 3 for fibonacci(4)', () => {
    expect(fibonacci(4)).to.equal(3);
  });

  it('should return 5 for fibonacci(5)', () => {
    expect(fibonacci(5)).to.equal(5);
  });

  it('should return 55 for fibonacci(10)', () => {
    expect(fibonacci(10)).to.equal(55);
  });

  // Edge case: Negative numbers (should typically throw an error or handle specifically)
  it('should throw an error for negative numbers', () => {
    expect(() => fibonacci(-1)).to.throw('Fibonacci is not defined for negative numbers.');
  });
});