var assert = require("assert");
var assesment = require("./fnd4");

describe("currency #start_test", function() {
  describe("USDl", function(a, b) {
    it("should return  1.33", function() {
      assert.equal(assesment(100), 1.33);
    });
    it("should return 20.89", function() {
      assert.equal(assesment(1567), 20.89);
    });
    it("should return 16.45", function() {
      assert.equal(assesment(1234), 16.45);
    });
    it("should return 339.41 #end_test", function() {
      assert.equal(assesment(25456), 339.41);
    });
  });
});
