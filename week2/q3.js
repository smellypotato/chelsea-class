/*
Question 3: Two Sum (LeetCode #1)

Problem Description:
Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target.
You may assume that each input could have any number of solutions (including zero, one, or more), but you only need to return one valid pair of indices. Do not use the same element twice.
If there is no solution, return an empty array [].
You can return the answer in any order.

Example Usage:
twoSum([2,7,11,15], 9);
// Output: [0, 1]

twoSum([3,2,4], 6);
// Output: [1, 2]

twoSum([3,3], 6);
// Output: [0, 1]

twoSum([1,2,3], 7);
// Output: []

twoSum([1,2,3,4,3], 6);
// Output: [2,3] or [1,4] (any valid pair)

To test your solution:
node q3.js "[2,7,11,15]" 9
*/

function twoSum(nums, target) {
    for (let x = 0 ; x < nums.length; x ++) {
        for (let y = x+1 ; y < nums.length ; y++ ) {
            if (nums[x] + nums[y] === target) {
                return ([x, y]);
            }
        }
    }
    return [];
}

// Export the function for testing
module.exports = { twoSum };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    // Get the input array and target from command line arguments
    const numsArg = process.argv[2];
    const targetArg = process.argv[3];

    if (numsArg === undefined || targetArg === undefined) {
        console.log("Please provide an array and a target as command line arguments");
        process.exit(1);
    }

    let nums;
    try {
        nums = JSON.parse(numsArg);
        if (!Array.isArray(nums)) throw new Error();
    } catch {
        console.log("First argument must be a valid array, e.g. [2,7,11,15]");
        process.exit(1);
    }

    const target = Number(targetArg);
    if (isNaN(target)) {
        console.log("Second argument must be a valid number");
        process.exit(1);
    }

    console.log(`Input array: ${JSON.stringify(nums)}`);
    console.log(`Target: ${target}`);
    console.log(`Output: ${JSON.stringify(twoSum(nums, target))}`);
} 