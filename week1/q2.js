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
    // if (!str) return;
    {/*
        Remark for line 28:
        Empty str already handled at line 21, no need to check again.
        Also, If return with no value, the function could return undefined. That might casuse problem
        if other code expect the function have a specific return type.
    */}

    let count = 0;
    lowercase_str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(lowercase_str[i])) {
            count += 1
        }
    }
    return count;
}

const count_result = countVowels(inputString);
console.log(count_result);