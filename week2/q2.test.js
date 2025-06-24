const { isSubstring } = require('./q2');

// Test cases for isSubstring function
const testCases = [
  {
    name: "Substring at beginning",
    input: ["hello", "hello world"],
    expected: "hello is a substring of hello world",
    description: "Check if 'hello' is substring of 'hello world'"
  },
  {
    name: "Substring in middle",
    input: ["world", "hello world"],
    expected: "world is a substring of hello world",
    description: "Check if 'world' is substring of 'hello world'"
  },
  {
    name: "Identical strings",
    input: ["hello", "hello"],
    expected: "hello is a substring of hello",
    description: "Check if 'hello' is substring of 'hello'"
  },
  {
    name: "Empty string",
    input: ["", "hello"],
    expected: " is a substring of hello",
    description: "Check if empty string is substring of 'hello'"
  },
  {
    name: "Case sensitive - no match",
    input: ["Hello", "hello world"],
    expected: "Neither string is a substring of the other",
    description: "Check case sensitivity with 'Hello' and 'hello world'"
  },
  {
    name: "No substring relationship",
    input: ["python", "javascript"],
    expected: "Neither string is a substring of the other",
    description: "Check if 'python' is substring of 'javascript'"
  },
  {
    name: "Partial match",
    input: ["hell", "hello"],
    expected: "hell is a substring of hello",
    description: "Check if 'hell' is substring of 'hello'"
  },
  {
    name: "Single character match",
    input: ["a", "banana"],
    expected: "a is a substring of banana",
    description: "Check if 'a' is substring of 'banana'"
  },
  {
    name: "Single character no match",
    input: ["z", "banana"],
    expected: "Neither string is a substring of the other",
    description: "Check if 'z' is substring of 'banana'"
  },
  {
    name: "Special characters",
    input: ["!", "hello!"],
    expected: "! is a substring of hello!",
    description: "Check if '!' is substring of 'hello!'"
  }
];

// Run tests and display results
function runTests() {
  console.log("🧪 Testing Substring Check Function\n");
  console.log("=" .repeat(50));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    try {
      const result = isSubstring(testCase.input[0], testCase.input[1]);
      const isPassed = result === testCase.expected;
      
      if (isPassed) {
        console.log(`✅ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: "${testCase.input[0]}" and "${testCase.input[1]}"`);
        console.log(`   Expected: "${testCase.expected}"`);
        console.log(`   Output: "${result}"`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: "${testCase.input[0]}" and "${testCase.input[1]}"`);
        console.log(`   Expected: "${testCase.expected}"`);
        console.log(`   Output: ${JSON.stringify(result)}`);
        console.log(`   Status: FAILED\n`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
      console.log(`   Input: "${testCase.input[0]}" and "${testCase.input[1]}"`);
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