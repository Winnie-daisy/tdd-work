// test/fibonacci.test.js

import { expect } from 'chai';
import fibonacci from '../fibonacci.js'; // Note the .js extension and ES import

describe('fibonacci', () => {
  // --- TDD Cycle 1 ---
  // Red: Test for fibonacci(0)
  it('should return 0 for fibonacci(0)', () => {
    expect(fibonacci(0)).to.equal(0);
  });
});