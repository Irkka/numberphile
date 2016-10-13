const assert = require('assert'),
	Numberphile = require('../lib/numberphile')

describe('Numberphile', function () {
	describe('#is_happy', function () {
		it('should return true, if the number is happy', function () {
			let happy_number = 7
			assert(Numberphile.is_happy(happy_number))
		})

		it('should return false, if the number is unhappy', function () {
			let unhappy_number = 8
			assert(!Numberphile.is_happy(unhappy_number))
		})
	})
})
