var assert = require("assert");
var assesment = require("./fnd31");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 32", function() {
    assert.equal(assesment(2), 1.5);
  });
  it("should return 32", function() {
    assert.equal(assesment(10), 2.93);
  });
  it("should return 44", function() {
    assert.equal(assesment(50), 4.5);
  });
  it("should return 34", function() {
    assert.equal(assesment(75), 4.9);
  });
  it("should return 34 #end_test", function() {
    assert.equal(assesment(100), 5.19);
  });
});
