const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(5.0, 7.0), 12);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(5.0, 7.4), 12);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(6.4, 7.4), 13);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(6.4, 7.0), 13);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(5.0, 7.5), 13);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(8.6, 7.5), 16);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(8.6, 7.0), 16);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(7.499999, 10.499999), 17);
  });
});