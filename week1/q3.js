/*
Question 3: Reverse String

Problem Description:
Write a function that reverses a given string using a for loop. The function should output both the original and reversed strings.

Example Usage:
reverseString("Hello");  
// Output:
// Original string: Hello
// Reversed string: olleH

reverseString("A man, a plan, a canal: Panama");
// Output:
// Original string: A man, a plan, a canal: Panama
// Reversed string: amanaP :lanac a ,nalp a ,nam A

reverseString("");
// Output:
// Original string: 
// Reversed string: 

To test your solution:
node q3.js "Your test string"
*/


// Get the input string from command line arguments
const inputString = process.argv[2];

// Check if input is provided
if (inputString === undefined) {
    console.log("Please provide a string as a command line argument");
    process.exit(1);
}

// Function to reverse a string
function reverseString(str) {
    // TODO: Implement your solution here
    let reversed_str = "";
    // if (str) { // if block is redundant as empty str is already handled at line 32.
    for (let i = str.length - 1; i >= 0; i--) { // 9 8 7 6 5
        reversed_str += str[i];
    }
    // }
    return "Original string: " + str + "\n" + "Reversed string: " + reversed_str
}

const result = reverseString(inputString);
console.log(result);