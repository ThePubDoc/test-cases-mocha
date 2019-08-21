var assert = require("assert");
var assesment = require("./fnd3");

describe("total #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return temperature 37.6", function() {
    assert.equal(assesment(37.6), 99.68);
  });
  it("should return temperature -40", function() {
    assert.equal(assesment(-40), -40);
  });
  it("should return temperature 212", function() {
    assert.equal(assesment(100), 212);
  });
  it("should return temperature -148 #end_test", function() {
    assert.equal(assesment(-100), -148);
  });
});
