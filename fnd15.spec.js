var assert = require("assert");
var assesment = require("./fnd15");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 80", function() {
    assert.equal(assesment(34, 56), 80);
  });
  it("should return 80", function() {
    assert.equal(assesment(1, 999), 80);
  });
  it("should return 65", function() {
    assert.equal(assesment(45, 15), 65);
  });
  it("should return 65", function() {
    assert.equal(assesment(1, 70), 65);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(12, 34), 80);
  });
});
