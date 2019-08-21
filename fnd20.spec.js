var assert = require("assert");
var assesment = require("./fnd20");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 144", function() {
    assert.equal(assesment(12, 20), 144);
  });
  it("should return 900", function() {
    assert.equal(assesment(30, 50), 900);
  });
  it("should return 500000", function() {
    assert.equal(assesment(100, 10000), 500000);
  });
  it("should return 110250  #end_test", function() {
    assert.equal(assesment(245, 900), 110250);
  });
});