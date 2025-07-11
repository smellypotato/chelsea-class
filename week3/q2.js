/*
Question 2: Draw inversed Triangle

Problem Description:
Given a single character and a number (eg x), output a inversed triangle of x * x with spaces between each character

Example Usage:
inversedTriangle("*", 3);
// Output:
// Input: "*", 3
// Result:
// * * *
// * *
// *

inversedTriangle("#", 4);
// Output:
// Input: "#", 4
// Result:
// # # # #
// # # #
// # #
// #

To test your solution:
node ./week3/q2.js * 3
node ./week3/q2.js "#" 4
*/

const inputValidation = (char, size) => {
    if (char === undefined || size === undefined) throw new Error("Please provide the character and number, e.g., * 3");
    if (typeof char !== 'string' || char.length !== 1) throw new Error("First argument must be a single character");
    if (!Number.isInteger(size) || size <= 0) throw new Error("Second argument must be a positive integer");
}

function inversedTriangle(char, size) {
    // TODO: Implement your solution here
}

// Export the function for testing
module.exports = { inversedTriangle };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input from command line arguments
    let char, size;
    try {
        char = process.argv[2];
        size = parseInt(process.argv[3], 10);
        inputValidation(char, size);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log(`Input: "${char}", ${size}`);
    const result = inversedTriangle(char, size);
    console.log("Result:");
    result.forEach(row => console.log(row));
} 