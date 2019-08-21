var assert = require("assert");
var assesment = require("./fnd32");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 4", function() {
    assert.equal(assesment(10), 4);
  });
  it("should return 25", function() {
    assert.equal(assesment(100), 25);
  });
  it("should return 168", function() {
    assert.equal(assesment(999), 168);
  });
  it("should return 1229 #end_test", function() {
    assert.equal(assesment(10000), 1229);
  });
});
