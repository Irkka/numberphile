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

	describe('#isHighlyComposite', function () {
		it('should return true, if the number is highly composite', function () {
			let highlyCompositeNumber = 12
			assert(Numberphile.isHighlyComposite(highlyCompositeNumber))
		})

		it('should return false, if the number is not highly composite', function () {
			let primeNumber = 13
			assert(!Numberphile.isHighlyComposite(primeNumber))
		})

		it('should raise an exception, when called with a non-positive argument', function () {
			let nonPositiveFunctionCall = function () {
				Numberphile.isHighlyComposite(-1)
			}

			assert.throws(nonPositiveFunctionCall)
		})

		it('should raise an exception, when called with a non-integer argument', function () {
			let nonIntegerFunctionCall = function () {
				Numberphile.isHighlyComposite('hello')
			}

			assert.throws(nonIntegerFunctionCall)
		})
	})

	describe('#isPerfect', function () {
		it('should return true, if the number is perfect', function () {
			let perfectNumber = 8128

			assert(Numberphile.isPerfect(perfectNumber))
		})

		it('should return false, if the number is imperfect', function () {
			let imperfectNumber = 5

			assert(!Numberphile.isPerfect(imperfectNumber))
		})

		it('should raise an exception, when called with a non-positive argument', function () {
			let nonPositiveFunctionCall = function () {
				Numberphile.isPerfect(-1)
			}

			assert.throws(nonPositiveFunctionCall)
		})

		it('should raise an exception, when called with a non-integer argument', function () {
			let nonIntegerFunctionCall = function () {
				Numberphile.isPerfect('hello')
			}

			assert.throws(nonIntegerFunctionCall)
		})
	})
})
