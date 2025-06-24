const { twoSum } = require('./q3');

// Test cases for twoSum function
const testCases = [
  {
    name: "Simple solution",
    input: [[2,7,11,15], 9],
    expectSolution: true,
    description: "Should find indices for 2 + 7 = 9"
  },
  {
    name: "Another solution",
    input: [[3,2,4], 6],
    expectSolution: true,
    description: "Should find indices for 2 + 4 = 6"
  },
  {
    name: "Duplicate elements",
    input: [[3,3], 6],
    expectSolution: true,
    description: "Should find indices for 3 + 3 = 6"
  },
  {
    name: "No solution",
    input: [[1,2,3], 7],
    expectSolution: false,
    description: "Should return [] when no solution exists"
  },
  {
    name: "Multiple solutions possible",
    input: [[1,2,3,4,3], 6],
    expectSolution: true,
    description: "Should return any valid pair for 3 + 3 or 2 + 4"
  },
  {
    name: "Negative numbers",
    input: [[-1,-2,-3,-4,-5], -8],
    expectSolution: true,
    description: "Should find indices for -3 + -5 = -8"
  },
  {
    name: "Zero sum",
    input: [[0,4,3,0], 0],
    expectSolution: true,
    description: "Should find indices for 0 + 0 = 0"
  },
  {
    name: "Larger array",
    input: [[1,2,3,4,5], 9],
    expectSolution: true,
    description: "Should find indices for 4 + 5 = 9"
  }
];

function isValidTwoSumResult(nums, target, result) {
  if (!Array.isArray(result)) return false;
  if (result.length === 0) {
    // No solution, check that there is indeed no valid pair
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return false;
      }
    }
    return true;
  }
  if (result.length !== 2) return false;
  const [i, j] = result;
  if (i === j) return false;
  if (i < 0 || i >= nums.length || j < 0 || j >= nums.length) return false;
  if (nums[i] + nums[j] !== target) return false;
  return true;
}

function runTests() {
  console.log("\uD83E\uDDEA Testing Two Sum Function\n");
  console.log("=".repeat(50));
  let passed = 0;
  let failed = 0;
  testCases.forEach((testCase, idx) => {
    try {
      const [nums, target] = testCase.input;
      const result = twoSum(nums, target);
      const valid = isValidTwoSumResult(nums, target, result);
      const shouldBeEmpty = !testCase.expectSolution;
      const isEmpty = Array.isArray(result) && result.length === 0;
      const pass = shouldBeEmpty ? isEmpty && valid : valid && !isEmpty;
      if (pass) {
        console.log(`✅ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: nums=${JSON.stringify(nums)}, target=${target}`);
        console.log(`   Output: ${JSON.stringify(result)}`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: nums=${JSON.stringify(nums)}, target=${target}`);
        console.log(`   Output: ${JSON.stringify(result)}`);
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