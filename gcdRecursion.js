// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 
//euclid algorithm


const gcdRecursive = function(a, b) {
    let max = Math.max(a, b);
    let min = Math.max(a, b);
    // find simplest 'base case'. 
    if (max % min === 0) {
        return min
    } else {
        let remainder = max % min;
        return gcdRecursive(min, remainder)

    }


};        


console.log(gcdRecursive(7, 5))
console.log(gcdRecursive(16, 6))