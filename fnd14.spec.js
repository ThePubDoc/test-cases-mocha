var assert = require("assert");
var assesment = require("./fnd14");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return true", function() {
    assert.equal(assesment(1, 2341, 1231), true);
  });
  it("should return false", function() {
    assert.equal(assesment(0, 500, 123), false);
  });
  it("should return true", function() {
    assert.equal(assesment(5434, 64, 904), true);
  });
  it("should return false", function() {
    assert.equal(assesment(2345, 653, 234), false);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(1, 123, 543), false);
  });
});
