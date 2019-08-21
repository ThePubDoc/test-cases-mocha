var assert = require("assert");
var assesment = require("./fnd27");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 10", function() {
    assert.equal(assesment(5), 10);
  });
  it("should return 23460", function() {
    assert.equal(assesment(23456), 23460);
  });
  it("should return 570", function() {
    assert.equal(assesment(567), 570);
  });
  it("should return 1270 #end_test", function() {
    assert.equal(assesment(1270), 1270);
  });
});
