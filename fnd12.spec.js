var assert = require("assert");
var assesment = require("./fnd12");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return true", function() {
    assert.equal(assesment(66, 123, 12), true);
  });
  it("should return true", function() {
    assert.equal(assesment(1234, 55, 23), true);
  });
  it("should return true", function() {
    assert.equal(assesment(25, 105, 5534), false);
  });
  it("should return false", function() {
    assert.equal(assesment(21, 543, 1), false);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(55, 66, 77), true);
  });
});
