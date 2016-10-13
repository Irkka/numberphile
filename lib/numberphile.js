exports.isHappy = function (number) {
	let cycle = []

	while (number != 1) {
		if (cycle.includes(number))
			return false

		cycle.push(number)

		number = sumSquaredDigits(number)
	}

	return true
}

function splitDigits(number) {
	return number.toString().split('').map(function (digit) { return parseInt(digit) })
}

function sumSquaredDigits(number) {
	let numberDigits = splitDigits(number)
	let summedSquaredDigits = numberDigits.reduce(function (accumulator, number) {
		return accumulator + Math.pow(number, 2)
  }, 0)

	return summedSquaredDigits
}

exports.isNarcissistic = function (number) {
  let numberDigits = splitDigits(number)
  let power = numberDigits.length

  let summedRaisedDigits = numberDigits.reduce(function (accumulator, number) {
    return accumulator + Math.pow(number, power)
  }, 0)

  if (summedRaisedDigits == number)
    return true
  else
    return false
}
