var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can click number', function() {
    calculator.numberClick(7);
    assert.equal(7, calculator.runningTotal);
  })

  it('can clear total', function() {
    calculator.numberClick(1);
    assert.equal(1, calculator.runningTotal);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  });

  it("can subtract", function() {
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(-5, calculator.runningTotal);
  });

  it("can multiply", function() {
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(22, calculator.runningTotal);
  });

  it("can divide", function() {
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.numberClick(2);
    calculator.operatorClick("/");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal)
  });

  it("can handle floats", function() {
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(7.5, calculator.runningTotal);
  });

});
