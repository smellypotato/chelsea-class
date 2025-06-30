/*
Question 4: Remove Duplicates from Sorted Array

Problem Description:
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length.
*in-place means you must modify the input array.

Example Usage:
removeDuplicates([1,1,2]);
// Output: 2, nums = [1,2]

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
// Output: 5, nums = [0,1,2,3,4]

To test your solution:
node q4.js "[1,1,2]"
*/

function removeDuplicates(nums) {
    let first_seen_num = nums[0];
	for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== first_seen_num) {
            first_seen_num = nums[i];
        } else {
            nums.splice(i,1);
            i--;
        }
	}
    return nums.length;
}

// Export the function for testing
module.exports = { removeDuplicates };

// Command line execution (only run if this file is executed directly)
if (require.main === module) {
    const numsArg = process.argv[2];
    if (numsArg === undefined) {
        console.log("Please provide an array as a command line argument");
        process.exit(1);
    }
    let nums;
    try {
        nums = JSON.parse(numsArg);
        if (!Array.isArray(nums)) throw new Error();
    } catch {
        console.log("Argument must be a valid array, e.g. [1,1,2]");
        process.exit(1);
    }
    const k = removeDuplicates(nums);
    console.log(`New length: ${k}`);
    console.log(`Modified array: ${JSON.stringify(nums.slice(0, k))}`);
} 