const { findMajority } = require('./q4');

// Test cases for findMajority function
const testCases = [
  {
    name: "Numbers with clear majority",
    input: [1, 2, 1, 1, 2, 1],
    expected: "1",
    description: "Array [1,2,1,1,2,1] should return '1' as majority"
  },
  {
    name: "Numbers with tie",
    input: [1, 2, 1, 2],
    expected: "1, 2",
    description: "Array [1,2,1,2] should return '1, 2' for tie"
  },
  {
    name: "Characters with clear majority",
    input: ['a', 'b', 'a', 'b', 'a'],
    expected: "a",
    description: "Array ['a','b','a','b','a'] should return 'a' as majority"
  },
  {
    name: "Characters with tie",
    input: ['x', 'y', 'x', 'y'],
    expected: "x, y",
    description: "Array ['x','y','x','y'] should return 'x, y' for tie"
  },
  {
    name: "Symbols with clear majority",
    input: ['+', '-', '+', '+', '-'],
    expected: "+",
    description: "Array ['+','-','+','+','-'] should return '+' as majority"
  },
  {
    name: "Symbols with tie",
    input: ['*', '/', '*', '/'],
    expected: "*, /",
    description: "Array ['*','/','*','/'] should return '*, /' for tie"
  },
  {
    name: "Mixed types - numbers and characters",
    input: [1, 'a', 1, 'a', 1],
    expected: "1",
    description: "Array [1,'a',1,'a',1] should return '1' as majority"
  },
  {
    name: "Mixed types with tie",
    input: [5, 'z', 5, 'z'],
    expected: "5, z",
    description: "Array [5,'z',5,'z'] should return '5, z' for tie"
  },
  {
    name: "Single digit numbers",
    input: [0, 9, 0, 9, 0, 9, 0],
    expected: "0",
    description: "Array [0,9,0,9,0,9,0] should return '0' as majority"
  },
  {
    name: "Long array with clear majority",
    input: [1, 2, 1, 2, 1, 2, 1, 2, 1],
    expected: "1",
    description: "Long array with 5 ones and 4 twos should return '1'"
  }
];

// Function to compare results
function resultsEqual(a, b) {
  return a === b;
}

// Run tests and display results
function runTests() {
  console.log("🧪 Testing Find Majority Function\n");
  console.log("=" .repeat(50));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    try {
      const result = findMajority([...testCase.input]); // Create a copy to avoid modifying original
      const isPassed = resultsEqual(result, testCase.expected);
      
      if (isPassed) {
        console.log(`✅ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: [${testCase.input.join(',')}]`);
        console.log(`   Expected: "${testCase.expected}"`);
        console.log(`   Output: "${result}"`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: [${testCase.input.join(',')}]`);
        console.log(`   Expected: "${testCase.expected}"`);
        console.log(`   Output: "${result}"`);
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