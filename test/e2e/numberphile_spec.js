const assert = require('assert'),
	Numberphile = require('../../lib/numberphile')

const shouldValidateArguments = function (functionToTest) {
	it('should raise an exception, when called with a non-positive argument', function () {
		let nonPositiveFunctionCall = function () {
			functionToTest(-1)
		}

		assert.throws(nonPositiveFunctionCall)
	})

	it('should raise an exception, when called with a non-integer argument', function () {
		let nonIntegerFunctionCall = function () {
			functionToTest('hello')
		}

		assert.throws(nonIntegerFunctionCall)
	})
}

describe('Numberphile', function () {
	describe('#isHappy', function () {
		shouldValidateArguments(Numberphile.isHappy)

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
		shouldValidateArguments(Numberphile.isNarcissistic)

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
		shouldValidateArguments(Numberphile.isGrafting)

		it('should return true, if the number is grafting', function () {
			let graftingNumber = 98
			assert(Numberphile.isGrafting(graftingNumber))
		})

		it('should return false, if the number is not grafting', function () {
			let nonGraftingNumber = 97
			assert(!Numberphile.isGrafting(nonGraftingNumber))
		})
	})

	describe('#isHighlyComposite', function () {
		shouldValidateArguments(Numberphile.isHighlyComposite)

		it('should return true, if the number is highly composite', function () {
			let highlyCompositeNumber = 12
			assert(Numberphile.isHighlyComposite(highlyCompositeNumber))
		})

		it('should return false, if the number is not highly composite', function () {
			let primeNumber = 13
			assert(!Numberphile.isHighlyComposite(primeNumber))
		})
	})

	describe('#isPerfect', function () {
		shouldValidateArguments(Numberphile.isPerfect)

		it('should return true, if the number is perfect', function () {
			let perfectNumber = 8128

			assert(Numberphile.isPerfect(perfectNumber))
		})

		it('should return false, if the number is imperfect', function () {
			let imperfectNumber = 5

			assert(!Numberphile.isPerfect(imperfectNumber))
		})
	})

	describe('#areAmicable', function () {
		it('should return true, if the numbers are amicable to each other', function () {
			let amicableNumber = 220,
				anotherAmicableNumber = 284

			assert(Numberphile.areAmicable(amicableNumber, anotherAmicableNumber))
		})

		it('should return false, if the numbers are not amicable to each other', function () {
			let nonAmicableNumber = 5,
				anotherNonAmicableNumber = 13

			assert(!Numberphile.areAmicable(nonAmicableNumber, anotherNonAmicableNumber))
		})

		it('should raise an exception, when called with a non-positive argument', function () {
			let nonPositiveFunctionCall = function () {
				Numberphile.areAmicable(-1, 1)
			}

			assert.throws(nonPositiveFunctionCall)
		})

		it('should raise an exception, when called with a non-integer argument', function () {
			let nonIntegerFunctionCall = function () {
				Numberphile.areAmicable('hello', 1)
			}

			assert.throws(nonIntegerFunctionCall)
		})
	})

	describe('#isMersennePrime', function () {
		shouldValidateArguments(Numberphile.isMersennePrime)

		it('should return true, if the number is a Mersenne prime', function () {
			let mersennePrime = 31

			assert(Numberphile.isMersennePrime(mersennePrime))
		})

		it('should return false, if the number is not a Mersenne prime', function () {
			let nonMersennePrime = 6

			assert(!Numberphile.isMersennePrime(nonMersennePrime))
		})
	})
})
