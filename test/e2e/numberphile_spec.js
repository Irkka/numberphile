const assert = require('assert'),
  Numberphile = require('../../lib/numberphile')

describe('Numberphile', function () {
  describe('#isHappy', function () {
    it('should return true, if the number is happy', function () {
      let happyNumber = 7
      assert(Numberphile.isHappy(happyNumber))
    })

    it('should return false, if the number is unhappy', function () {
      let unhappyNumber = 8
      assert(!Numberphile.isHappy(unhappyNumber))
    })

    it('should raise an exception, when called with a non-integer argument', function () {
      let nonIntegerFunctionCall = function () {
        Numberphile.isHappy('hello')
      }

      assert.throws(nonIntegerFunctionCall)
    })
  })

  describe('#isNarcissistic', function () {
    it('should return true, if the number is narcissistic', function () {
      let narcissisticNumber =  8208
      assert(Numberphile.isNarcissistic(narcissisticNumber))
    })

    it('should return false, if the number is not narcissistic', function () {
      let nonNarcissisticNumber = 11
      assert(!Numberphile.isNarcissistic(nonNarcissisticNumber))
    })

    it('should raise an exception, when called with a non-integer argument', function () {
      let nonIntegerFunctionCall = function () {
        Numberphile.isNarcissistic('hello')
      }

      assert.throws(nonIntegerFunctionCall)
    })
  })

  describe('#isGrafting', function () {
    it('should return true, if the number is grafting', function () {
      let graftingNumber = 98
      assert(Numberphile.isGrafting(graftingNumber))
    })

    it('should return false, if the number is not grafting', function () {
      let nonGraftingNumber = 97
      assert(!Numberphile.isGrafting(nonGraftingNumber))
    })

    it('should raise an exception, when called with a non-integer argument', function () {
      let nonIntegerFunctionCall = function () {
        Numberphile.isGrafting('hello')
      }

      assert.throws(nonIntegerFunctionCall)
    })
  })
})
