const { hasLoop } = require('./q5');

// Test cases for hasLoop function
const testCases = [
  {
    name: 'No loop (ends with -1)',
    input: [1, 2, -1],
    expected: false,
    description: '0 -> 1 -> 2 -> -1 (end)'
  },
  {
    name: 'Simple loop',
    input: [1, 2, 0],
    expected: true,
    description: '0 -> 1 -> 2 -> 0 (loop)'
  },
  {
    name: 'Self loop',
    input: [0],
    expected: true,
    description: '0 -> 0 (loop)'
  },
  {
    name: 'Longer loop',
    input: [2, 3, 4, 2, 1],
    expected: true,
    description: '0 -> 2 -> 4 -> 1 -> 3 -> 2 (loop)'
  },
  {
    name: 'Disconnected, no loop',
    input: [2, 3, -1, -1],
    expected: false,
    description: '0 -> 2 -> -1, 1 -> 3 -> -1 (no loop)'
  },
  {
    name: 'End with out-of-bounds index',
    input: [1, 2, 5],
    expected: false,
    description: '0 -> 1 -> 2 -> 5 (out of bounds, end)'
  },
  {
    name: 'Negative index (other than -1)',
    input: [1, -2, -1],
    expected: false,
    description: '0 -> 1 -> -2 (out of bounds, end)'
  },
  {
    name: 'Single node, ends with -1',
    input: [-1],
    expected: false,
    description: '0 -> -1 (end)'
  },
];

function runTests() {
  console.log("\uD83E\uDDEA Testing hasLoop Function\n");
  console.log("=".repeat(50));
  let passed = 0;
  let failed = 0;
  testCases.forEach((testCase, idx) => {
    try {
      const arr = [...testCase.input];
      const result = hasLoop(arr);
      if (result === testCase.expected) {
        console.log(`✅ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.input)}`);
        console.log(`   Output: ${result}`);
        console.log(`   Description: ${testCase.description}`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.input)}`);
        console.log(`   Output: ${result}`);
        console.log(`   Expected: ${testCase.expected}`);
        console.log(`   Description: ${testCase.description}`);
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