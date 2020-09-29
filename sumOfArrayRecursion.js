// Write a JavaScript program to compute the sum of an array of integers 
// using recursion

let testArray = [4, 7, 9, 3, 1, 0, 5]

const sumOfArrayRecursive = function (arr) {
    // base case
    if (arr.length < 1) {
        return 0; 
    } 

    return arr.pop() + sumOfArrayRecursive(arr); 
    // return the sum of all the Numbers 
}


console.log(sumOfArrayRecursive([testArray]))

console.log(sumOfArrayRecursive([]))