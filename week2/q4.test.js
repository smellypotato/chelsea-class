const { removeDuplicates } = require('./q4');

// Test cases for removeDuplicates function
const testCases = [
  {
    name: "Simple case",
    input: [1,1,2],
    expectedLength: 2,
    expectedArray: [1,2],
    description: "Should remove duplicates and return length 2"
  },
  {
    name: "Longer sorted array",
    input: [0,0,1,1,1,2,2,3,3,4],
    expectedLength: 5,
    expectedArray: [0,1,2,3,4],
    description: "Should remove duplicates and return length 5"
  },
  {
    name: "No duplicates",
    input: [1,2,3,4,5],
    expectedLength: 5,
    expectedArray: [1,2,3,4,5],
    description: "Should return original length and array"
  },
  {
    name: "All duplicates",
    input: [2,2,2,2,2],
    expectedLength: 1,
    expectedArray: [2],
    description: "Should return length 1 and array with single element"
  },
  {
    name: "Empty array",
    input: [],
    expectedLength: 0,
    expectedArray: [],
    description: "Should return length 0 for empty array"
  },
  {
    name: "Single element",
    input: [7],
    expectedLength: 1,
    expectedArray: [7],
    description: "Should return length 1 for single element array"
  }
];

function arraysEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => v === b[i]);
}

function runTests() {
  console.log("\uD83E\uDDEA Testing Remove Duplicates Function\n");
  console.log("=".repeat(50));
  let passed = 0;
  let failed = 0;
  testCases.forEach((testCase, idx) => {
    try {
      const nums = [...testCase.input]; // Copy to avoid mutation
      const k = removeDuplicates(nums);
      const uniquePart = nums.slice(0, k);
      const pass = k === testCase.expectedLength && arraysEqual(uniquePart, testCase.expectedArray);
      if (pass) {
        console.log(`✅ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.input)}`);
        console.log(`   Output length: ${k}`);
        console.log(`   Output array: ${JSON.stringify(uniquePart)}`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.input)}`);
        console.log(`   Output length: ${k}`);
        console.log(`   Output array: ${JSON.stringify(uniquePart)}`);
        console.log(`   Expected length: ${testCase.expectedLength}`);
        console.log(`   Expected array: ${JSON.stringify(testCase.expectedArray)}`);
        console.log(`   Status: FAILED\n`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test Case ${idx + 1}: ${testCase.name}`);
      console.log(`   Error: ${error.message}`);
      console.log(`   Status: FAILED\n`);
      failed++;
    }
  });
  console.log("=".repeat(50));
  console.log(`📊 Test Results Summary:`);
  console.log(`   Total Test Cases: ${testCases.length}`);
  console.log(`   ✅ Passed: ${passed}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📈 Success Rate: ${((passed / testCases.length) * 100).toFixed(1)}%`);
  if (failed === 0) {
    console.log(`\n🎉 All test cases passed! Your solution is correct.`);
  } else {
    console.log(`\n⚠️  ${failed} test case(s) failed. Please review your implementation.`);
  }
}

module.exports = { testCases, runTests };

if (require.main === module) {
  runTests();
} 