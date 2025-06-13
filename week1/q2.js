/*
Question 2: Count Vowels in String

Problem Description:
Write a function that counts the number of vowels (a, e, i, o, u) in a given string using a for loop. Output the result in the console.

Example Usage:
countVowels("Hello");  // returns 2
countVowels("AEIOU");  // returns 5
countVowels("xyz");    // returns 0
countVowels("");       // returns 0

To test your solution:
node q2.js "Your test string"
*/

// Get the input string from command line arguments
const inputString = process.argv[2];

// Check if input is provided
if (inputString === undefined) {
    console.log("Please provide a string as a command line argument");
    process.exit(1);
}

// Function to count vowels in a string
function countVowels(str) {
    // TODO: Implement your solution here
}
