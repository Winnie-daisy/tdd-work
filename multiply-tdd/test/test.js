// test/test.js
import { expect } from 'chai'; // Change 'require' to 'import'
import multiply from '../multiply.js'; // Also change this to import and add .js extension

describe('multiply', () => {
  it('should multiply 1 by 1 and return 1', () => {
    expect(multiply(1, 1)).to.equal(1);
  });

  it('should multiply 2 by 2 and return 4', () => {
     expect(multiply(2, 2)).to.equal(4);
   });

   it('should multiply 3 by 3 and return 9', () => {
    expect(multiply(3, 3)).to.equal(9);
   });

  it('should multiply 4 by 4 and return 16', () => {
     expect(multiply(4, 4)).to.equal(16);
   });

   it('should multiply 23 by 45 and return their product', () => {
     expect(multiply(23, 45)).to.equal(23 * 45);
   });

   it('should multiply by zero and return zero', () => {
     expect(multiply(5, 0)).to.equal(0);
   });

   it('should multiply by a negative number', () => {
     expect(multiply(5, -3)).to.equal(-15);
   });

   it('should multiply two negative numbers', () => {
     expect(multiply(-5, -3)).to.equal(15);
   });
 });