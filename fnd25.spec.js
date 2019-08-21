var assert = require("assert");
var assesment = require("./fnd25");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 9", function() {
    assert.equal(assesment(50), 9);
  });
  it("should return 44", function() {
    assert.equal(assesment(1000), 44);
  });
  it("should return 140", function() {
    assert.equal(assesment(9999), 140);
  });
  it("should return 444 #end_test", function() {
    assert.equal(assesment(98989), 444);
  });
});
