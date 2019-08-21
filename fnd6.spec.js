var assert = require("assert");
var assesment = require("./fnd6");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return 12", function() {
    assert.equal(assesment(1), 12);
  });
  it("should return 86", function() {
    assert.equal(assesment(56), 86);
  });
  it("should return 172", function() {
    assert.equal(assesment(99), 172);
  });
  it("should return 442", function() {
    assert.equal(assesment(234), 442);
  });
  it("should return 4464 #end_test", function() {
    assert.equal(assesment(2245), 4464);
  });
});
