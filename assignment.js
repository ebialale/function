// const a = [3, 7, 3, 3, 3, 4, 4, 3, 8, 3];
// const b = 3;
// var total = 0;

// a.forEach(function(num) {
//     if (num === b) {
//         total++
//     }
// })

// console.log(total);



// This is the Second assignment

// const numberA = 9;
// const numbersB = [3, 10, 7, 12, 9, 1, 0];

// var ans = 0;

// numbersB.forEach(function test(num) {
//     if (num < numberA) {
//         console.log(num)
//     }
// })


// This is the modification

var a = 17;
var b = 9;
var arr = new Array (a - b - 1);
const c = [3, 10, 7, 12, 9, 1, 0];


for ( var i = 0; i < arr.length; i++, a--) {
    arr[i] = a;
}
 console.log(arr)