function primeNumber(number) {

  var num;
  var number;
  var flag = true;
    
    for ( num = 2; num <= number - 1; num++) 
        if (number % num == 0){

            flag = false;
            break;

        }
    
        if (flag == true)

            console.log("Its a prime number");
        else
            console.log("Its not a prime number");
        
    
}
console.log(primeNumber(9));