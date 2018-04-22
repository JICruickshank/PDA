var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it("should have working clear button", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number3")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("3");
    element(by.css("#clear")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("0");
  });


  it('should have a working + operator', function(){
    element(by.css("#clear")).click();
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  });

  it("should have working - operator", function(){
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number9")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number7")).click();
    element(by.css("#operator_subtract")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("should have working = operator", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number6")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("1");
  });

  it("should have working * operator", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number3")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("12");
  });

  it("should have working / operator", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number4")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });


  it("should handle floats", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number5")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2.5");
  });

  it("should handle multipe digit numbers", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number7")).click();
    element(by.css("#number8")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("78");
  });

  it("should handle multiple operations", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number3")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number7")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("22");
  });

  it("should handle big numbers", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number4")).click();
    element(by.css("#number6")).click();
    element(by.css("#number5")).click();
    element(by.css("#number1")).click();
    element(by.css("#number2")).click();
    element(by.css("#number8")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number6")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("27907734");
  });

  it("should give error on division by zero", function() {
    element(by.css("#clear")).click();
    running_total = element(by.css("#running_total"));
    element(by.css("#number8")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("Not a number");
  });

});
