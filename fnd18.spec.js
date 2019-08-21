var assert = require("assert");
var assesment = require("./fnd18");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return true", function() {
    assert.equal(assesment(4, 4), true);
  });
  it("should return true", function() {
    assert.equal(assesment(10, 8), true);
  });
  it("should return false", function() {
    assert.equal(assesment(100, 999), false);
  });
  it("should return false", function() {
    assert.equal(assesment(1, 19), false);
  });
  it("should return false  #end_test", function() {
    assert.equal(assesment(25, 75), false);
  });
});