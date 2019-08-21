var assert = require("assert");
var assesment = require("./fnd5");

describe("leap year #start_test", function(a, b) {
  // var base=10;
  //var height=20;
  it("should return 0", function() {
    assert.equal(assesment(1010), 0);
  });
  it("should return 0", function() {
    assert.equal(assesment(300), 0);
  });
  it("should return 1", function() {
    assert.equal(assesment(4404), 1);
  });
  it("should return 1", function() {
    assert.equal(assesment(9600), 1);
  });
  it("should return 0 #end_test", function() {
    assert.equal(assesment(99800), 0);
  });
});
