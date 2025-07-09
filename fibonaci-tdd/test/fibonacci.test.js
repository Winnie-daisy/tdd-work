// test/fibonacci.test.js

import { expect } from 'chai';
import fibonacci from '../fibonacci.js';

describe('fibonacci', () => {
  // --- TDD Cycle 1 ---
  it('should return 0 for fibonacci(0)', () => {
    expect(fibonacci(0)).to.equal(0);
  });

  // --- TDD Cycle 2 ---
  // Red: Test for fibonacci(1)
  it('should return 1 for fibonacci(1)', () => {
    expect(fibonacci(1)).to.equal(1);
  });
});