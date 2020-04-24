//This comment by mudi
var numbers = [3, 5, 6, 7, 300];


// var middleItem = [(numbers.length - 1) / 2];
// console.log(middleItem)

function calculate(array) {
    // first item + last item - (last item + 1) / 2
//first item + last item (array.length-1) + middle item (array.length)
    //var middleIndex = (array.length - 1);

    var ans = array[0] + array[array.length - 1] - array[(array.length - 1) / 2];
    return ans;
}


console.log(calculate(numbers))