const chai = require("chai");
const expect = chai.expect;
const ex1 = require("./fnd40");

describe("Fibonaci #start_test", () => {
  it("should calculate sum of series", () => {
    let output = ex1(2);
    expect(output).to.equal(5);
  });
  it("should calculate sum of series", () => {
    let output = ex1(3);
    expect(output).to.equal(32);
  });
  it("should calculate sum of series #end_test", () => {
    let output = ex1(10);
    expect(output).to.equal(10405071317);
  });
});
