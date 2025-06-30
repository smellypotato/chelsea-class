/*
Question 1: Plus One

Problem Description:
You are given a large positive integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
e.g. [1,2,3] represents the integer 123.
Increment the large integer by one and return the resulting array of digits.

Example Usage:
plusOne([1,2,3]);
// Output:
// Input: [1,2,3]
// Result: [1,2,4]

plusOne([9,9,9]);
// Output:
// Input: [9,9,9]
// Result: [1,0,0,0]

To test your solution:
node q1.js [1,2,3]
node q1.js [9,9,9]
*/

const inputValidation = (input) => {
    if (input === undefined) throw new Error("Please provide the digits as a comma-separated array, e.g., [1,2,3]");
    if (!Array.isArray(input) || input.length === 0) throw new Error("Input must be a non-empty array");
    for (let i = 0; i < input.length; i++) {
        if (!Number.isInteger(input[i]) || input[i] < 0 || input[i] > 9) throw new Error("Each element must be a single digit integer (0-9)");
    }
    if (input.length > 1 && input[0] === 0) throw new Error("Array cannot have leading zeros");
}

// Function to increment the large integer by one
function plusOne(digits) {
    let res = [];
    for (let i = 0; i < digits.length + 1; i++) {
        res.push(0);
    }

    let end_adding = false;
    let add_zero_or_one = 0;
    for (let i = res.length-1; i > 0; i--) { 
        if (end_adding === false) {
            if (digits[i-1] === 9 && digits.length === 1) {
                res[i] = 0; // res 3
                res[0] = 1;
                break;
            } else if (digits[i-1] === 9) { // if digit 2 is 9 -> res 3 -> 0
                res[i] = 0; // res 3
                add_zero_or_one = 1;
                end_adding = true;
            } else {
                res[i] = digits[i-1] + 1; // not 9 -> res 3 -> digit 3
                end_adding = true;
            }
        } else {
            if ( digits[i-1] === 9 && add_zero_or_one === 1) {
                res[i] = 0;
                add_zero_or_one = 1;
                res[i-1] = 1;
                end_adding = true;
            } else if (digits[i-1] < 9 && add_zero_or_one === 1) {
                res[i] = digits[i-1] + 1;
                add_zero_or_one = 0;
                end_adding = true;
            } else {
                res[i] = digits[i-1]
            }
        }

        if (i === 0) {
            break;
        }
    }

    if (res[0] === 0) {
        res.splice(0,1)
    }
    return res
}

// Export the function for testing
module.exports = { plusOne };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input digits from command line arguments
    let input;
    try {
        input = JSON.parse(process.argv[2]);
        inputValidation(input);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log(`Input: [${input.join(',')}]`);
    const result = plusOne([...input]); // Create a copy to avoid modifying the original
    console.log(`Result: [${result.join(',')}]`);
}