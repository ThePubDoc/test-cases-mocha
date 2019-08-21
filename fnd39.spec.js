const chai = require("chai");
const expect = chai.expect;
const ex1 = require("./fnd39");

describe("Fibonaci #start_test", () => {
  it("should calculate gcd of two numbers", () => {
    let output = ex1(123,33);
    expect(output).to.equal(3);
  });
  it("should calculate gcd of two numbers", () => {
    let output = ex1(12336,33);
    expect(output).to.equal(3);
  });
  it("should calculate gcd of two numbers #end_test", () => {
    let output = ex1(2154, 458);
    expect(output).to.equal(2);
  });
});
