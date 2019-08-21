var assert = require("assert");
var assesment = require("./fnd11");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return true", function() {
    assert.equal(assesment(243), true);
  });
  it("should return false", function() {
    assert.equal(assesment(6547), false);
  });
  it("should return false", function() {
    assert.equal(assesment(1234), false);
  });
  it("should return true", function() {
    assert.equal(assesment(543), true);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(7565), false);
  });
});
