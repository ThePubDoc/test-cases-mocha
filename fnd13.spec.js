var assert = require("assert");
var assesment = require("./fnd13");

describe("max num #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 1234", function() {
    assert.equal(assesment(2, 93, 1234), 1234);
  });
  it("should return 5334", function() {
    assert.equal(assesment(5334, 4, 765), 5334);
  });
  it("should return 999", function() {
    assert.equal(assesment(998, 999, 997), 999);
  });
  it("should return 665", function() {
    assert.equal(assesment(445, 665, 223), 665);
  });
  it("should return 432 #end_test", function() {
    assert.equal(assesment(234, 432, 243), 432);
  });
});
