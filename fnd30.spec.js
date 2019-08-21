var assert = require("assert");
var assesment = require("./fnd30");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 32", function() {
    assert.equal(assesment(24865748), 32);
  });
  it("should return 32", function() {
    assert.equal(assesment(9981838089), 32);
  });
  it("should return 44", function() {
    assert.equal(assesment(124456832468), 44);
  });
  it("should return 34 #end_test", function() {
    assert.equal(assesment(6536765433834), 34);
  });
});
