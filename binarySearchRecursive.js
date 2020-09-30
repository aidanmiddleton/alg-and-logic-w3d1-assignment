let testArray =  [2, 6, 13, 25, 34, 46, 57, 68, 90];

// 46

const binarySearchRecursive = function(arr, low, high, target) {
    

    let mid = Math.floor(low + (high - low) / 2);

    if (target === arr[mid]) {
        return mid
    } else if (target < arr[mid]) {
        return binarySearchRecursive(arr, low, (mid - 1), target)
    } else if (target > arr[mid]) {
        return binarySearchRecursive(arr, (mid + 1), high, target)
    }


}

console.log(binarySearchRecursive(testArray, 0, (testArray.length - 1), 46));