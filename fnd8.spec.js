var assert = require("assert");
var assesment = require("./fnd8");

describe("return true and false #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return false", function() {
    assert.equal(assesment(55, 95), false);
  });
  it("should return true", function() {
    assert.equal(assesment(50, 1055), true);
  });
  it("should return true", function() {
    assert.equal(assesment(234, 50), true);
  });
  it("should return true", function() {
    assert.equal(assesment(25, 25), true);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(1, 999), false);
  });
});
