var assert = require("assert");
var assesment = require("./fnd9");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return false", function() {
    assert.equal(assesment(1), false);
  });
  it("should return false", function() {
    assert.equal(assesment(9001), false);
  });
  it("should return true", function() {
    assert.equal(assesment(89), true);
  });
  it("should return true", function() {
    assert.equal(assesment(401), true);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(250), false);
  });
});
