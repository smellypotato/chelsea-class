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

    const str1_length = str1.split(" ").length;
    const str2_length = str2.split(" ").length;
    const str1_array = str1.split(" ");
    const str2_array = str2.split(" ");
    let substring = [];
    for (let x = 0; x < str1_length; x++) {
        for (let y = 0; y < str2_length; y++) {
            if (str1_array[x] === str2_array[y]) {
                substring.push(str1_array[x]);
            } 
        }
    }

    const substrings = substring.map((sub) => '"' + sub + '"');
    const substring_part = substrings.join(", ");
    // const s
    // console.log(`String 1: ${substrings.join(", ")}`);
    if (substring.length === 0) {
        return `Result: Neither string is a substring of the other`;
    }

    if (str1_length > str2_length) {
        if (substring.length > 1) {
            return `Result: ${substring_part} are substrings of "${str1}"`;
        }
        return `Result: "${substring}" is a substring of "${str1}"`;
    } else if (str2_length > str1_length) {
        if (substring.length > 1) {
            return `Result: ${substring_part} are substrings of "${str2}"`;
        }
        return `Result: "${substring}" is a substring of "${str2}"`;
    } else {
        return `Result: Neither string is a substring of the other`;
    }
}

const result = isSubstring(string1, string2);
console.log(result);