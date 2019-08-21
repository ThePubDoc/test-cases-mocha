var assert = require("assert");
var assesment = require("./fnd2");

describe("total #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return area 250", function() {
    assert.equal(assesment(10, 50), 250);
  });
  it("should return area 11700", function() {
    assert.equal(assesment(100, 234), 11700);
  });
  it("should return area 199908", function() {
    assert.equal(assesment(324, 1234), 199908);
  });
  it("should return area 2106 #end_test", function() {
    assert.equal(assesment(54, 78), 2106);
  });
});
