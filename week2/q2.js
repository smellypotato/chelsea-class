/*
Question 2: Substring Check with For Loop

Problem Description:
Write a function that checks if one string is a substring of another without using the built-in string methods. Either string could be the substring of the other.

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

/* Learning Points
1. let longStr; By default, it already is undefined. No need to write let longStr = undefined;
*/
function isSubstring(str1, str2) {
    // let longStr = undefined;
    // let shortStr = undefined;
    let longStr;
    let shortStr;
    if (str1.length > str2.length) {
        longStr = str1;
        shortStr = str2;
    } else {
        longStr = str2;
        shortStr = str1;
    }
    
    for (let x = 0; x <= longStr.length - shortStr.length; x++) {
        if (longStr.slice(x, x + shortStr.length) === shortStr) {
            return `${shortStr} is a substring of ${longStr}`;
        }
    }
    return `Neither string is a substring of the other`;
}

// Export the function for testing
module.exports = { isSubstring };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input strings from command line arguments
    const string1 = process.argv[2];
    const string2 = process.argv[3];

    // Check if both inputs are provided
    if (string1 === undefined || string2 === undefined) {
        console.log("Please provide two strings as command line arguments");
        process.exit(1);
    }

    console.log(`String 1: ${string1}`);
    console.log(`String 2: ${string2}`);
    console.log(`Result: ${isSubstring(string1, string2)}`);
}