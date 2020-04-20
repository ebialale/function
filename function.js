console.log(numTest(11))
function numTest(number) {
	if (number % 2 === 0) {
		return "bar";
	} else if (isPrimeNumber(number)) {
	return "foobar";
	} else if ( number % 2 === 1) {
		return "foo";
	} else {
		return "Something went wrong!";		
	}
}

function isPrimeNumber(number) {
	let numberPrime = true;

	for (var i = 2; i < number; i++) {
		// A number is divided by the current iteration to 		
		if ( number % i === 0) {
			numberPrime = false;
			break;
		}
	}

	return numberPrime;
}
