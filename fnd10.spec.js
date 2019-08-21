var assert = require("assert");
var assesment = require("./fnd10");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return false", function() {
    assert.equal(assesment(2, 56), false);
  });
  it("should return false", function() {
    assert.equal(assesment(-5, 365), true);
  });
  it("should return true", function() {
    assert.equal(assesment(45, -654), true);
  });
  it("should return true", function() {
    assert.equal(assesment(-546, -234), false);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(456, 298), false);
  });
});
