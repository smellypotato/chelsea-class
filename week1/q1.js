/*
Question 1: String Character Output

Problem Description:
Write a function that takes a string as input and outputs each character of the string on a new line. Neglect any spaces in the string.

Example Usage:
printCharacters("Hello World");
// Output:
// H
// e
// l
// l
// o
// W
// o
// r
// l
// d

printCharacters("");
// Output: (no output for empty string)

To test your solution:
node q1.js "Your test string"
*/


// Get the input string from command line arguments
const inputString = process.argv[2];

// Check if input is provided
if (inputString === undefined) {
    console.log("Please provide a string as a command line argument");
    process.exit(1);
}

// Function to print each character of a string on a new line
function printCharacters(str) {
    // TODO: Implement your solution here
}
