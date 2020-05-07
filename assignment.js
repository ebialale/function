function thisFunction(b, a) {
  var numOfBOcurrences = 0;

  a.forEach(function(num) {
    if (num === b) {
      numOfBOcurrences++;
    }
  });

  return  numOfBOcurrences;
}





//This is the Second assignment

// const a = 9;
// const b = 4;
// const c = [3, 10, 7, 12, 9, 1];

// var newArray = [];

// c.forEach(function(num) {
//     if (num > 0 && num < a) {
//         newArray.push(num);
//     }
// })
// console.log(newArray)

// This is the modification

function secondAssignment(a, b, c) {
  var newArray = [];

  if (a < b) {
    c.forEach(function(num) {
        if (num > a && num < b) {
            newArray.push(num);
        }
    })
  } else if (a > b) {
    c.forEach(function(num) {
        if (num < a && num > b) {
            newArray.push(num);
        }
    })
  }
  return newArray;
}

