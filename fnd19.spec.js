var assert = require("assert");
var assesment = require("./fnd19");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 20", function() {
    assert.equal(assesment(1, 2, 2), 20);
  });
  it("should return 30", function() {
    assert.equal(assesment(2, 2, 2), 30);
  });
  it("should return 40", function() {
    assert.equal(assesment(1, 2, 3), 40);
  });
  it("should return 20", function() {
    assert.equal(assesment(3, 1, 3), 20);
  });
  it("should return 20  #end_test", function() {
    assert.equal(assesment(1, 1, 2), 20);
  });
});