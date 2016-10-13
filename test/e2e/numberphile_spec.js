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
  })
})
