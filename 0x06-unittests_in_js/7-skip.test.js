const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  it.skip('11 is equal to 31', () => {
    expect(11 === 31).to.be.true;
  });

  it('32 is equal to 32', () => {
    expect(32 === 32).to.be.true;
  });

  it('24 is equal to 24', () => {
    expect(24 === 24).to.be.true;
  });

  it('53 is equal to 53', () => {
    expect(53 === 53).to.be.true;
  });

  it('61 is equal to 61', () => {
    expect(61 === 61).to.be.true;
  });

  it('17 is equal to 17', () => {
    expect(17 === 17).to.be.true;
  });
});