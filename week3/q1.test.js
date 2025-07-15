const { triangle } = require('./q1');

// Test cases for triangle function
const testCases = [
  {
    name: "Simple triangle with asterisk",
    char: "*",
    size: 3,
    expected: ["*", "* *", "* * *"],
    description: "triangle(\"*\", 3) should return [\"*\", \"* *\", \"* * *\"]"
  },
  {
    name: "Triangle with hash symbol",
    char: "#",
    size: 4,
    expected: ["#", "# #", "# # #", "# # # #"],
    description: "triangle(\"#\", 4) should return [\"#\", \"# #\", \"# # #\", \"# # # #\"]"
  },
  {
    name: "Single row triangle",
    char: "+",
    size: 1,
    expected: ["+"],
    description: "triangle(\"+\", 1) should return [\"+\"]"
  },
  {
    name: "Large triangle",
    char: "@",
    size: 5,
    expected: ["@", "@ @", "@ @ @", "@ @ @ @", "@ @ @ @ @"],
    description: "triangle(\"@\", 5) should return [\"@\", \"@ @\", \"@ @ @\", \"@ @ @ @\", \"@ @ @ @ @\"]"
  },
  {
    name: "Triangle with number character",
    char: "1",
    size: 3,
    expected: ["1", "1 1", "1 1 1"],
    description: "triangle(\"1\", 3) should return [\"1\", \"1 1\", \"1 1 1\"]"
  },
  {
    name: "Triangle with letter character",
    char: "A",
    size: 4,
    expected: ["A", "A A", "A A A", "A A A A"],
    description: "triangle(\"A\", 4) should return [\"A\", \"A A\", \"A A A\", \"A A A A\"]"
  },
  {
    name: "Triangle with special character",
    char: "$",
    size: 2,
    expected: ["$", "$ $"],
    description: "triangle(\"$\", 2) should return [\"$\", \"$ $\"]"
  },
  {
    name: "Triangle with space character",
    char: " ",
    size: 3,
    expected: [" ", "   ", "     "],
    description: "triangle(\" \", 3) should return [\" \", \"   \", \"     \"]"
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
  console.log("🧪 Testing Triangle Function\n");
  console.log("=" .repeat(50));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    try {
      const result = triangle(testCase.char, testCase.size);
      const isPassed = arraysEqual(result, testCase.expected);
      
      if (isPassed) {
        console.log(`✅ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: "${testCase.char}" ${testCase.size}`);
        console.log(`   Expected: ${JSON.stringify(testCase.expected)}`);
        console.log(`   Output: ${JSON.stringify(result)}`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: "${testCase.char}" ${testCase.size}`);
        console.log(`   Expected: ${JSON.stringify(testCase.expected)}`);
        console.log(`   Output: ${JSON.stringify(result)}`);
        console.log(`   Status: FAILED\n`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
      console.log(`   Input: "${testCase.char}" ${testCase.size}`);
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