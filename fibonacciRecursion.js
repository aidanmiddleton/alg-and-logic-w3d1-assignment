// Write a JavaScript program to get the first n Fibonacci numbers using recursion
// the fibonacci sequence involes adding the past two numbers in a list to
// create the next one. 

// https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=The%20Fibonacci%20Sequence%20is%20the,21%2C%2034%2C%20...

const fibonacciRecursive = function(n) {
    if (n < 2) {
        return n
    } else {
        return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2))
    }
}

console.log(fibonacciRecursive(5))


// 0, 1, 1, 2, 3, 5, 8, 13, 