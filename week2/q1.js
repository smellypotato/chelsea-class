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

/*
Learning Points:
1. can use slice() to create a copy of the array to avoid modifying the original input. line 74
2. The flag (carryOne) doesn't have to be limited to true or false; it can hold a value (like 1) and be used directly. line 75
3. I can make a copy of the input array and update it in place, empty res array and reverse_num is not needed. line 44
*/

// My solution
// Function to increment the large integer by one
function plusOne(digits) {
    let res = digits.slice();
    // let res = [];
    // let reverse_num = [];
    let stop_add_one = false
    for (let i = digits.length - 1; i >= 0; i--) {
        if (stop_add_one === false) {
            if (digits[i] === 9) {
                // reverse_num.push(0)
                res[i] = 0;
            } else {
                // reverse_num.push(digits[i] + 1)
                res[i] = digits[i] + 1;
                stop_add_one = true;
            }
        } else {
            // reverse_num.push(digits[i])
            res[i] = digits[i];
        }
    }

    // for (let i = reverse_num.length - 1; i >= 0; i--) {
    //     res.push(reverse_num[i]);
    // }

    if (res[0] === 0) res.unshift(1);
    return res;
}

// Henry's solution
// function plusOne(digits) {
//     let res = digits.slice();
//     let carryOne = 1;
//     for (let i = res.length - 1; i >= 0; i--) {
//         res[i] += carryOne;
//         carryOne = Math.floor(res[i] / 10);
//         res[i] %= 10;
//     }
//     if (carryOne === 1) res.unshift(carryOne);
//     return res
// }

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
    console.log(input, "input");
    console.log(result, "result");
    console.log(`Result: [${result.join(',')}]`);
}