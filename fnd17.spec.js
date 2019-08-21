var assert = require("assert");
var assesment = require("./fnd17");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 1175", function() {
    assert.equal(assesment(25, 47, 3), 1175);
  });
  it("should return 25", function() {
    assert.equal(assesment(50, 2, 4), 25);
  });
  it("should return 24", function() {
    assert.equal(assesment(100, 76, 2), 24);
  });
  it("should return 1114", function() {
    assert.equal(assesment(345, 769, 1), 1114);
  });
  it("should return 2 #end_test", function() {
    assert.equal(assesment(100, 50, 4), 2);
  });
});
