/*
Question 4: Substring Check

Problem Description:
Write a function that checks if one string is a substring of another. Either string could be the substring of the other.

Example Usage:
isSubstring("world", "hello world");
// Output:
// String 1: world
// String 2: hello world
// Result: "world" is a substring of "hello world"

isSubstring("hello world", "hello");
// Output:
// String 1: hello world
// String 2: hello
// Result: "hello" is a substring of "hello world"

isSubstring("python", "javascript");
// Output:
// String 1: python
// String 2: javascript
// Result: Neither string is a substring of the other

To test your solution:
node q4.js "first string" "second string"
*/

// Get the input strings from command line arguments
const string1 = process.argv[2];
const string2 = process.argv[3];

// Check if both inputs are provided
if (string1 === undefined || string2 === undefined) {
    console.log("Please provide two strings as command line arguments");
    process.exit(1);
}

// Function to check if one string is a substring of another
function isSubstring(str1, str2) {
    // TODO: Implement your solution here

    if (str1.includes(str2)) {
        return `Result: "${str2}" is a substring of "${str1}"`;
    } else if (str2.includes(str1)) {
        return `Result: "${str1}" is a substring of "${str2}"`;
    }
    return `Result: Neither string is a substring of the other`;
}

const result = isSubstring(string1, string2);
console.log(result);