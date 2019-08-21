var assert = require("assert");
var assesment = require("./fnd16");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return East", function() {
    assert.equal(assesment(1), "East");
  });
  it("should return West", function() {
    assert.equal(assesment(2), "West");
  });
  it("should return North", function() {
    assert.equal(assesment(3), "North");
  });
  it("should return South", function() {
    assert.equal(assesment(4), "South");
  });
  it("should return Wromg Input #end_test", function() {
    assert.equal(assesment(0), "Wrong Input");
  });
});
