/*
Question 1: Closest to Zero

Problem Description:
Given an array of numbers, find the number closest to 0. The numbers range from -273 to 5526.
If two numbers are equally close to zero, the positive integer has to be considered closest to zero.
If the array is empty, output 0.

Rules:
- Numbers range from -273 to 5526
- If two numbers have the same absolute value (e.g., -5 and 5), choose the positive one
- If array is empty, return 0
- The function should handle both positive and negative numbers
- Keep your code readible and as short as possible

Example Usage:
closestToZero([1, -2, -8, 4, 5]);
// Output:
// Input: [1, -2, -8, 4, 5]
// Result: 1

closestToZero([-12, -5, -137]);
// Output:
// Input: [-12, -5, -137]
// Result: -5

closestToZero([42, -5, 12, 21, 5, 24]);
// Output:
// Input: [42, -5, 12, 21, 5, 24]
// Result: 5

To test your solution:
node ./week5/q1.js "[1,-2,-8,4,5]"
node ./week5/q1.js "[-12,-5,-137]"
node ./week5/q1.js "[42,-5,12,21,5,24]"
*/

const inputValidation = (arr) => {
    if (arr === undefined) throw new Error("Please provide an array, e.g., [1,-2,-8,4,5]");
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) throw new Error("All elements must be integers");
        if (arr[i] < -273 || arr[i] > 5526) throw new Error("Numbers must be between -273 and 5526");
    }
}

function closestToZero(arr) {
    // TODO: Implement your solution here
}

// Export the function for testing
module.exports = { closestToZero };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input from command line arguments
    let arr;
    try {
        const input = process.argv[2];
        if (!input) throw new Error("Please provide an array, e.g., [1,-2,-8,4,5]");
        
        // Parse the array from string
        arr = JSON.parse(input);
        inputValidation(arr);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log(`Input: ${JSON.stringify(arr)}`);
    const result = closestToZero(arr);
    console.log(`Result: ${result}`);
}
