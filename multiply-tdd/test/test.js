const { expect } = require('chai');
const { multiply } = require('../multiply')

describe('multiply',() => {
    it('should multiply1 by 1 and return 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });
});