
console.log(numTest(9))

function numTest(number) {
	if (number % 2 === 0) {
		return "bar";
	} else if (isPrimeNumber(number) === true) {
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
		// This condition checks if the number passed can be divided by any number other than itself.
		// If it finds a number that divides it, then it is not a prime number  		
		if ( number % i === 0) {
			numberPrime = false;
			break;
		}
	}

	return numberPrime;
}



// function isPrimeNumber(number) {
//     let testPrime = true;
// 	var i = 2;
	
//     while (i < number) {
//         if (number % i === 0) {
//             testPrime = false;
//             break;
// 		} 
// 		i++;
// 	}
	
//     return testPrime;
    
// }




