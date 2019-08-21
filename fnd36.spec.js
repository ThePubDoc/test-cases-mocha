const chai = require("chai");
const expect = chai.expect;
const ex1 = require("./fnd36");

describe("Fibonaci #start_test", () => {
  it("should calculate nth power", () => {
    let output = ex1(2,3);
    expect(output).to.equal(8);
  });
  it("should calculate nth power", () => {
    let output = ex1(4,3);
    expect(output).to.equal(64);
  });
  it("should calculate nth power #end_test", () => {
    let output = ex1(2,4);
    expect(output).to.equal(16);
  });
});


// console.log(ex1(2,3));