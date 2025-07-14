/*
Question 5: Linked List Loop Detection

Problem Description:
Given an array of numbers, representing a linked list. Each number represents the next index. The end of the list is represented by -1 or by a next index that is out of bounds (greater than or equal to the array length or less than 0). Check if the linked list contains a loop.

Example Usage:
hasLoop([1, 2, -1]);
// Output: false

hasLoop([1, 2, 0]);
// Output: true

hasLoop([0]);
// Output: true

hasLoop([1, 2, 5]); // 5 is out of bounds, so end of list
// Output: false

to test your solution:
node q5.js [1,2,-1]
node q5.js [1,2,0]
node q5.js [0]
node q5.js [1,2,5]
*/

const inputValidation = (input) => {
    if (input === undefined) throw new Error("Please provide the array as a comma-separated list, e.g., [1,2,0]");
    if (!Array.isArray(input) || input.length === 0) throw new Error("Input must be a non-empty array");
    for (let i = 0; i < input.length; i++) {
        if (
            typeof input[i] !== 'number' || !Number.isInteger(input[i])
        ) {
            throw new Error("Each element must be an integer (index or -1)");
        }
    }
}

function hasLoop(arr) {
    // Implement your solution here
}

module.exports = { hasLoop };

if (require.main === module) {
    let input;
    try {
        input = JSON.parse(process.argv[2]);
        inputValidation(input);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
    console.log(`Input: [${input.join(',')}]`);
    const result = hasLoop([...input]);
    console.log(`Result: ${result}`);
} 