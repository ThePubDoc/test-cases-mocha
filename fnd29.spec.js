var assert = require("assert");
var assesment = require("./fnd29");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 1929", function() {
    assert.equal(assesment(123456, 2), 1929);
  });
  it("should return 1234", function() {
    assert.equal(assesment(123400000, 10), 1234);
  });
  it("should return 1", function() {
    assert.equal(assesment(729, 3), 1);
  });
  it("should return 54 #end_test", function() {
    assert.equal(assesment(54, 11), 54);
  });
});
