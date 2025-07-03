/*
Question 5: Rotate Array

Problem Description:
Given an array of single characters and a character target, rotate the array in place so that the target is at the first position and return true. If the target is not found, return false.
*in-place means you must modify the input array.

Criteria:
- Rotate the array one index at a time until the target is at the first position.
- Log the array after each single rotation step.

Example Usage:
rotateArray(['a','b','c','d'], 'c');
// Output: true, array = ['c','d','a','b']

rotateArray(['x','y','z'], 'y');
// Output: true, array = ['y','z','x']

rotateArray(['a','b','c'], 'q');
// Output: false, array = ['a','b','c']

To test your solution:
node q5.js "['a','b','c','d']" 'c'
*/

function rotateArray(arr, target) {
    if (!arr.includes(target)) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[0] !== target) {
            const rotate_value = arr[0];
            // arr.splice(0, 1);
            arr.shift(); // Use .shift() to remove the first element because it’s simpler; .splice() is better suited for removing elements at other indexes.
            arr.push(rotate_value);
            console.log(JSON.stringify(arr));
        } else {
            return true;
        }
    }
}

module.exports = { rotateArray };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    const arrArg = process.argv[2];
    const target = process.argv[3];
    if (arrArg === undefined || target === undefined) {
        console.log("Please provide an array and a target character as command line arguments");
        process.exit(1);
    }
    let arr;
    try {
        const formateValidArrArg = arrArg.replace(/'/g, '"');
        arr = JSON.parse(formateValidArrArg);
    } catch {
        console.log("First argument must be a valid array, e.g. ['a','b','c']");
        process.exit(1);
    }
    const result = rotateArray(arr, target);
    console.log(`Result: ${result}`);
    console.log(`Modified array: ${JSON.stringify(arr)}`);
} 