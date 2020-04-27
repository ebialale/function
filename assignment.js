// const a = [3, 7, 3, 3, 3, 4, 4, 3, 8, 3];
// const b = 3;
// var numOfBOcurrences = 0;

// a.forEach(function(num) {
//     if (num === b) {
//         numOfBOcurrences++
//     }
// })

// console.log(numOfBOcurrences);



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

// var a = 17;
// var b = 9;
// var arr = new Array ();
// const c = [3, 10, 7, 12, 9, 1, 0];


// var newArray = [];
// var arr = new Array ();


// for ( var i = 0; i < arr.length; i++, a--) {
//     arr[i] = a;
// }
//  console.log(arr)