var assert = require("assert");
var assesment = require("./fnd23");

describe("absolute diffference #start_test", function() {
  // var base=10;
  //var height=20;
  it("should return 1155", function() {
    assert.equal(assesment(6), 1155);
  });
  it("should return 277750", function() {
    assert.equal(assesment(100), 277750);
  });
  it("should return 27472500", function() {
    assert.equal(assesment(999), 27472500);
  });
  it("should return 512380  #end_test", function() {
    assert.equal(assesment(136), 512380);
  });
});
