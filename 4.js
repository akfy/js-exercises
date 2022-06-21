const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => { if (num % 2 == 0) {return true} else {return false} };

function filterArray (mixedArray) {
    return mixedArray.filter(el => isEven(el));
}


 console.log(filterArray(mixedArray, isEven));