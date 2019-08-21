var assert = require("assert");
var assesment = require("./fnd26");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 543", function() {
    assert.equal(assesment(50), 543);
  });
  it("should return 12614", function() {
    assert.equal(assesment(234), 12614);
  });
  it("should return 2318", function() {
    assert.equal(assesment(100), 2318);
  });
  it("should return 45 #end_test", function() {
    assert.equal(assesment(13), 45);
  });
});
