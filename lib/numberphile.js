exports.is_happy = function (number) {
	let cycle = []

	while (number != 1) {
		if (cycle.includes(number))
			return false

		cycle.push(number)

		number = sumSquaredConstituents(number)
	}

	return true
}

function sumSquaredConstituents(number) {
	let number_constituents = number.toString().split('')
	let squared_constituents = number_constituents.map(function (number) {
		return Math.pow(number, 2)
	})
	let summed_squared_constituents = squared_constituents.reduce(function (accumulator, number) {
		return accumulator + number
	})

	return summed_squared_constituents
}
