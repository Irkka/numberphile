/**
 * A guard function to prevent invalid arguments to the Numberphile functions
 *
 * @access public
 * @throws {Error} An error when called with an invalid argument
 * @param {number} number - number ∈ N \ 0
 */
exports.validateArgument = function (number) {
	if (isNaN(number) || !Number.isInteger(number)) {
		throw new Error('Non-integer argument')
	}

	isPositiveInteger(number)
}

/**
 * A guard function to prevent non-positive arguments to the Numberphile functions
 *
 * @access private
 * @throws {Error} An error when called with an invalid argument
 * @param {number} number - number ∈ N \ 0
 */
function isPositiveInteger(number) {
	if (number <= 0) {
		throw new Error('Non-positive argument')
	}
}
