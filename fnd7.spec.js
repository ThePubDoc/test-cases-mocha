var assert = require("assert");
var assesment = require("./fnd7");

describe("absolute diffference #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return 12", function() {
    assert.equal(assesment(1, 99), 100);
  });
  it("should return 86", function() {
    assert.equal(assesment(99, 99), 594);
  });
  it("should return 172", function() {
    assert.equal(assesment(1234, 123), 1357);
  });
  it("should return 442", function() {
    assert.equal(assesment(1234, 1234), 7404);
  });
  it("should return 4464 #end_test", function() {
    assert.equal(assesment(23, 23), 138);
  });
});
