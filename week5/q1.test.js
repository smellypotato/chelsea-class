const { closestToZero } = require('./q1');

// Test cases for closestToZero function
const testCases = [
  {
    name: "Simple test case",
    input: [1, -2, -8, 4, 5],
    expected: 1,
    description: "From [1, -2, -8, 4, 5], closest to zero is 1"
  },
  {
    name: "Only negative numbers",
    input: [-12, -5, -137],
    expected: -5,
    description: "From [-12, -5, -137], closest to zero is -5"
  },
  {
    name: "Choose the right temperature",
    input: [42, -5, 12, 21, 5, 24],
    expected: 5,
    description: "From [42, -5, 12, 21, 5, 24], closest to zero is 5"
  },
  {
    name: "Choose the right temperature 2",
    input: [42, 5, 12, 21, -5, 24],
    expected: 5,
    description: "From [42, 5, 12, 21, -5, 24], closest to zero is 5 (positive preferred over negative)"
  },
  {
    name: "Complex cases",
    input: [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5],
    expected: 2,
    description: "From [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5], closest to zero is 2"
  },
  {
    name: "Empty input",
    input: [],
    expected: 0,
    description: "Empty array should return 0"
  },
  {
    name: "Single positive number",
    input: [5],
    expected: 5,
    description: "Single positive number should return itself"
  },
  {
    name: "Single negative number",
    input: [-3],
    expected: -3,
    description: "Single negative number should return itself"
  },
  {
    name: "Zero in array",
    input: [10, -5, 0, 3],
    expected: 0,
    description: "Zero in array should return 0"
  },
  {
    name: "Tie between positive and negative",
    input: [-7, 7, -3, 3, -1, 1],
    expected: 1,
    description: "When tied, positive number should be chosen"
  },
  {
    name: "All same absolute value",
    input: [-5, 5, -5, 5],
    expected: 5,
    description: "When all numbers have same absolute value, choose positive"
  },
  {
    name: "Edge case: minimum range",
    input: [-273],
    expected: -273,
    description: "Minimum range value should work"
  },
  {
    name: "Edge case: maximum range",
    input: [5526],
    expected: 5526,
    description: "Maximum range value should work"
  },
  {
    name: "Large array with mixed values",
    input: [100, -50, 25, -12, 6, -3, 1, -1, 0, 2, -2],
    expected: 0,
    description: "Zero should be chosen when present"
  }
];

// Function to compare results
function resultsEqual(a, b) {
  return a === b;
}

// Run tests and display results
function runTests() {
  console.log("🧪 Testing Closest to Zero Function\n");
  console.log("=" .repeat(60));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    try {
      const result = closestToZero([...testCase.input]); // Create a copy to avoid modifying original
      const isPassed = resultsEqual(result, testCase.expected);
      
      if (isPassed) {
        console.log(`✅ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: [${testCase.input.join(',')}]`);
        console.log(`   Expected: ${testCase.expected}`);
        console.log(`   Output: ${result}`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: [${testCase.input.join(',')}]`);
        console.log(`   Expected: ${testCase.expected}`);
        console.log(`   Output: ${result}`);
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
  
  console.log("=" .repeat(60));
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
