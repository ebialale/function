
// console.log(numTest(9))

// function numTest(number) {
// 	if (number % 2 === 0) {
// 		return "bar";
// 	} else if (isPrimeNumber(number) === true) {
// 	return "foobar";
// 	} else if ( number % 2 === 1) {
// 		return "foo";
// 	} else {
// 		return "Something went wrong!";		
// 	}
// }





// function isPrimeNumber(number) {
// 	let numberPrime = true;

// 	for (var i = 2; i < number; i++) {
// 		// This condition checks if the number passed can be divided by any number other than itself.
// 		// If it finds a number that divides it, then it is not a prime number  		
// 		if ( number % i === 0) {
// 			numberPrime = false;
// 			break;
// 		}
// 	}

// 	return numberPrime;
// }



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

// console.log(multiply(3, 6))
// function multiply(num1, num2) {
// 	var ans = num1 * num2;
// 	return ans;
// }



var numbers = [3, 5, 6, 7, 3, 4, 9, 3, 1];

// var middleItem = [(numbers.length - 1) / 2];
// console.log(middleItem)

function calculate(array) {
	// first item + last item - (last item + 1) / 2
//first item + last item (array.length-1) + middle item (array.length)
	//var middleIndex = (array.length - 1);
	var ans = array[0] + array[array.length - 1] - array[(array.length - 1) / 2];
	return ans;
}

console.log(numbers.length)
