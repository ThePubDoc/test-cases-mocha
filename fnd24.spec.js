var assert = require("assert");
var assesment = require("./fnd24");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 2025", function() {
    assert.equal(assesment(9), 2025);
  });
  it("should return 44100", function() {
    assert.equal(assesment(20), 44100);
  });
  it("should return 5755975025", function() {
    assert.equal(assesment(234), 755975025);
  });
  it("should return 250500250000 #end_test", function() {
    assert.equal(assesment(1000), 250500250000);
  });
});
