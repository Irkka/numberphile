const Validators = require('./validators')

/**
 * The function returns an array of the positive integer argument's factors.
 *
 * @access public
 * @param {number} number - number ∈ N \ 0
 * @return {number[]} Array of factors
 */
function getFactors (number) {
	Validators.validateArgument(number)

	let factors = []

	for (let i = 1; i <= number; i++) {
		if(number % i == 0) {
			factors.push(i)
		}
	}

	return factors
}

exports.getFactors = getFactors

/**
 * The function tests if a given integer is considered prime, that is, it's only divisible by one and itself.
 *
 * @access public
 * @param {number} number - number ∈ N \ 0
 * @return {boolean} True, if the number is prime, otherwise false.
 */
exports.isPrime = function (number) {
	Validators.validateArgument(number)

	if (getFactors(number).length == 2)
		return true

	return false
}

/**
 * The function tests if a given integer is a power of two.
 *
 * @access public
 * @param {number} number - number ∈ N \ 0
 * @return {boolean} True, if the number is a power of two, otherwise false.
 */
exports.isPowerOfTwo = function (number) {
	Validators.validateArgument(number)

	if ((number & (number - 1)) == 0)
		return true

	return false
}

/**
 * Sums up the squared digits of a number.
 *
 * @access public
 * @param {number} - number ∈ N \ 0
 * @return {number} The total sum of the argument's squared digits
 */
exports.sumSquaredDigits = function (number) {
	Validators.validateArgument(number)

	let numberDigits = splitDigits(number)
	let summedSquaredDigits = numberDigits.reduce(function (accumulator, number) {
		return accumulator + Math.pow(number, 2)
	}, 0)

	return summedSquaredDigits
}

/**
 * The function takes a number and splits its digits into an ordered array.
 *
 * @access public
 * @param {number} - number ∈ N \ 0
 * @return {number[]} The argument's digits in an array
 */
function splitDigits (number) {
	Validators.validateArgument(number)

	return number.toString().split('').map(function (digit) { return parseInt(digit) })
}

exports.splitDigits = splitDigits
