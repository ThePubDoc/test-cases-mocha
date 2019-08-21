var assert = require("assert");
var assesment = require("./fnd28");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 24", function() {
    assert.equal(assesment(4), 24);
  });
  it("should return 720", function() {
    assert.equal(assesment(6), 720);
  });
  it("should return 3628800", function() {
    assert.equal(assesment(10), 3628800);
  });
  it("should return 1307674368000 #end_test", function() {
    assert.equal(assesment(15), 1307674368000);
  });
});
