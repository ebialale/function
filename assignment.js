const a = [3, 7, 3, 3, 3, 4, 4, 3, 8, 3];
const b = 3;
var numOfBOcurrences = 0;

a.forEach(function(num) {
    if (num === b) {
        numOfBOcurrences++
    }
})

console.log(numOfBOcurrences);



//This is the Second assignment

const a = 9;
const b = 4;
const c = [3, 10, 7, 12, 9, 1];

var newArray = [];

c.forEach(function(num) {
    if (num > 0 && num < a) {
        newArray.push(num);
    }
})
console.log(newArray)

// //This is the modification

const a = 25;
const b = 14;
const c = [3, 10, 7, 12, 9, 1];
var newArray = [];

if (a < b){
    c.forEach(function(num) {
        if (num > a && num < b) {
            newArray.push(num);
        }
    })
} else if (a > b){
    c.forEach(function(num) {
        if (num < a && num < b) {
            newArray.push(num);
        }
    })
}

console.log(newArray)