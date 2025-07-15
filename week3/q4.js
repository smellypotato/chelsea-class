/*
Question 4: Majority Element

Problem Description:
Given an array with two types of value, find the majority element. If both elements have the same number of appearance, output both of them as "A, B".
The type of value can vary, but is either a single digit number, a single symbol or a single character.

Example Usage:
findMajority([1, 2, 1, 1, 2, 1]);
// Output:
// Input: [1,2,1,1,2,1]
// Result: 1

findMajority([1, 2, 1, 2]);
// Output:
// Input: [1,2,1,2]
// Result: 1, 2

findMajority(['a', 'b', 'a', 'b', 'a']);
// Output:
// Input: [a,b,a,b,a]
// Result: a

To test your solution:
node q4.js [1,2,1,1,2,1]
node q4.js [1,2,1,2]
node q4.js '[\"a\",\"b\",\"a\",\"b\",\"a\"]'
*/

const inputValidation = (input) => {
    if (input === undefined) throw new Error("Please provide the array as a comma-separated list, e.g., [1,2,1,1,2,1]");
    if (!Array.isArray(input) || input.length === 0) throw new Error("Input must be a non-empty array");
    
    // Check if array has exactly two different types of values
    const uniqueValues = [...new Set(input)];
    if (uniqueValues.length !== 2) {
        throw new Error("Array must contain exactly two different types of values");
    }
    
    // Validate each element is a single digit number, single symbol, or single character
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (typeof element === 'number') {
            if (!Number.isInteger(element) || element < 0 || element > 9) {
                throw new Error("Numbers must be single digit integers (0-9)");
            }
        } else if (typeof element === 'string') {
            if (element.length !== 1) {
                throw new Error("Strings must be single characters");
            }
        } else {
            throw new Error("Elements must be single digit numbers, single symbols, or single characters");
        }
    }
}

function findMajority(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        } else {
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        }
    }
    const [x, y] = Object.keys(obj);

    if (obj[x] > obj[y]) {
        return x;
    } else if (obj[x] < obj[y]) {
        return y;
    } else return `${x}, ${y}`;
}

// Export the function for testing
module.exports = { findMajority };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input array from command line arguments
    let input;
    try {
        input = JSON.parse(process.argv[2]);
        // inputValidation(input);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log(`Input: [${input.join(',')}]`);
    const result = findMajority([...input]); // Create a copy to avoid modifying the original
    console.log(`Result: ${result}`);
} 