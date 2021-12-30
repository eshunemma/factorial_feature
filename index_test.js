var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when 5 is passed in', () => {
      // setup
      const inputNumber = 5;
      const expected = 120;

      // Exercise 
      const actual = Calculate.factorial(inputNumber);

      // verify
      assert.equal(actual, expected);
    })
    it('returns 6 when you pass in 3', () => {
      //setup
      const inputNumber = 3;
      const expected = 6;

      // excercise
      const actual = Calculate.factorial(inputNumber);

      // verify
      assert.equal(actual, expected);
    })
    it('returns 1 when you pass in 0.', () => {
      //setup
      const inputNumber = 0;
      const expected = 1;

      // excercise
      const actual = Calculate.factorial(inputNumber);

      // verify
      assert.equal(actual, expected);
    })
  });
});