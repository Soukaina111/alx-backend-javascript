const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 120) logs "The total is: 220" to the console', () => {
    sendPaymentRequestToApi(100, 120);
    expect(bigBrother.log.calledWith('The total is: 220')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(150, 10) logs "The total is: 160" to the console', () => {
    sendPaymentRequestToApi(150, 10);
    expect(bigBrother.log.calledWith('The total is: 160')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});