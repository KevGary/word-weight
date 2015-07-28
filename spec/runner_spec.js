// The formula to calculate the weight of the word is to look at the letter position in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight, then multiply that by the distance from the balance point, so the first letter away is multiplied by 1, the second away by 2, etc.
// As an example:
// STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))

var Runner = require("../runner");
describe("Runner", function() {
  it("weighs a balanceable word", function() {
    var runner = new Runner('STEAD');
    expect(runner.balanceWord()).toEqual("S T EAD");

    var runner = new Runner('WRONGHEADED');
    expect(runner.balanceWord()).toEqual("WRO N GHEADED");


    var runner = new Runner('UNINTELLIGIBILITY');
    expect(runner.balanceWord()).toEqual("UNINTELL I GIBILITY");
  });

  it("returns 'unbalanceable' when a word cannot be balanced", function() {
    var runner = new Runner('SUPERGLUE');
    expect(runner.balanceWord()).toEqual("unbalanceable");
  });
})