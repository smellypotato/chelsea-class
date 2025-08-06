/*
Question 3: Loops in Linked List

Problem Description:
Given a linked list as an array of numbers, return the number of distinct loops.
There can be 0+ loops in the array.

What is a loop?
- A loop occurs when following the indices leads to a cycle
- For example: [1, 2, 0] has 1 distinct loop because:
  - Start at index 0, value is 1 → go to index 1
  - At index 1, value is 2 → go to index 2  
  - At index 2, value is 0 → go to index 0 (back to start, creating a loop)

What is NOT a loop?
- A sequence that doesn't return to a previously visited index
- For example: [1, 2, -1] has 0 loops because:
  - Start at index 0, value is 1 → go to index 1
  - At index 1, value is 2 → go to index 2
  - At index 2, value is -1 → stop (no loop formed)

What are distinct loops?
- Distinct loops are separate cycles that don't overlap
- For example: [1, 0, 3, 2] has 2 distinct loops: 0↔1 and 2↔3
- Another example: [1, 2, 0, 1] has 1 distinct loop: 0↔1↔2 (same cycle regardless of starting point)

Example Usage:
countLoops([1, 2, 0]);
// Output:
// Input: [1, 2, 0]
// Result: 1

countLoops([1, 2, -1]);
// Output:
// Input: [1, 2, -1]
// Result: 0

countLoops([1, 2, 3, 1]);
// Output:
// Input: [1, 2, 3, 1]
// Result: 1

To test your solution:
node ./week4/q3.js "[1,2,0]"
node ./week4/q3.js "[1,2,-1]"
*/

const inputValidation = (arr) => {
    if (arr === undefined) throw new Error("Please provide an array, e.g., [1,2,0]");
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    if (arr.length === 0) throw new Error("Array cannot be empty");
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) throw new Error("All elements must be integers");
    }
}

function countLoops(arr) {
    // TODO: Implement your solution here
}

// Export the function for testing
module.exports = { countLoops };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input from command line arguments
    let arr;
    try {
        const input = process.argv[2];
        if (!input) throw new Error("Please provide an array, e.g., [1,2,0]");
        
        // Parse the array from string
        arr = JSON.parse(input);
        inputValidation(arr);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log(`Input: ${JSON.stringify(arr)}`);
    const result = countLoops(arr);
    console.log(`Result: ${result}`);
} 