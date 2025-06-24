const { plusOne } = require('./q1');

// Test cases for plusOne function
const testCases = [
  {
    name: "Simple increment",
    input: [1, 2, 3],
    expected: [1, 2, 4],
    description: "Increment [1,2,3] should return [1,2,4]"
  },
  {
    name: "Single digit",
    input: [5],
    expected: [6],
    description: "Increment [5] should return [6]"
  },
  {
    name: "Single digit with carry",
    input: [9],
    expected: [1, 0],
    description: "Increment [9] should return [1,0]"
  },
  {
    name: "Number ending with 9",
    input: [1, 9],
    expected: [2, 0],
    description: "Increment [1,9] should return [2,0]"
  },
  {
    name: "All nines",
    input: [9, 9, 9],
    expected: [1, 0, 0, 0],
    description: "Increment [9,9,9] should return [1,0,0,0]"
  },
  {
    name: "Zero",
    input: [0],
    expected: [1],
    description: "Increment [0] should return [1]"
  },
  {
    name: "Large number",
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    expected: [1, 2, 3, 4, 5, 6, 7, 9, 0],
    description: "Increment [1,2,3,4,5,6,7,8,9] should return [1,2,3,4,5,6,7,9,0]"
  },
  {
    name: "Multiple zeros",
    input: [1, 0, 0, 0],
    expected: [1, 0, 0, 1],
    description: "Increment [1,0,0,0] should return [1,0,0,1]"
  }
];

// Function to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Run tests and display results
function runTests() {
  console.log("🧪 Testing Plus One Function\n");
  console.log("=" .repeat(50));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    try {
      const result = plusOne([...testCase.input]); // Create a copy to avoid modifying original
      const isPassed = arraysEqual(result, testCase.expected);
      
      if (isPassed) {
        console.log(`✅ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: [${testCase.input.join(',')}]`);
        console.log(`   Expected: [${testCase.expected.join(',')}]`);
        console.log(`   Output: [${result.join(',')}]`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: [${testCase.input.join(',')}]`);
        console.log(`   Expected: [${testCase.expected.join(',')}]`);
        console.log(`   Output: ${JSON.stringify(result)}`);
        console.log(`   Status: FAILED\n`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
      console.log(`   Input: [${testCase.input.join(',')}]`);
      console.log(`   Error: ${error.message}`);
      console.log(`   Status: FAILED\n`);
      failed++;
    }
  });
  
  console.log("=" .repeat(50));
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

// Export for Jest testing (if needed)
module.exports = { testCases, runTests };

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
} 