var assert = require("assert");
var assesment = require("./fnd35");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 0", function() {
    assert.equal(assesment(4), 0);
  });
  it("should return 1", function() {
    assert.equal(assesment(134), 1);
  });
  it("should return 2", function() {
    assert.equal(assesment(179), 2);
  });
  it("should return 2 #end_test", function() {
    assert.equal(assesment(9971737089), 2);
  });
});
