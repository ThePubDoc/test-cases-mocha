var assert = require("assert");
var assesment = require("./fnd21");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return Acute angle", function() {
    assert.equal(assesment(12), "Acute angle");
  });
  it("should return Right angle", function() {
    assert.equal(assesment(90), "Right angle");
  });
  it("should return Obtuse angle", function() {
    assert.equal(assesment(123), "Obtuse angle");
  });
  it("should return Straight angle #end_test", function() {
    assert.equal(assesment(180), "Straight angle");
  });
});
