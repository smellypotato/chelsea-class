const { countLoops } = require('./q3');

// Test cases for countLoops function
const testCases = [
  {
    name: "Simple distinct loop with 3 elements",
    arr: [1, 2, 0],
    expected: 1,
    description: "countLoops([1, 2, 0]) should return 1 (one distinct loop: 0→1→2→0)"
  },
  {
    name: "No loop - terminates with -1",
    arr: [1, 2, -1],
    expected: 0,
    description: "countLoops([1, 2, -1]) should return 0 (no loop, terminates at -1)"
  },
  {
    name: "Loop with 4 elements",
    arr: [1, 2, 3, 1],
    expected: 1,
    description: "countLoops([1, 2, 3, 1]) should return 1 (one distinct loop: 0→1→2→3→1)"
  },
  {
    name: "Same distinct loop from different starting points",
    arr: [1, 2, 0, 1],
    expected: 1,
    description: "countLoops([1, 2, 0, 1]) should return 1 (same distinct loop: 0↔1↔2 regardless of starting point)"
  },
  {
    name: "Self-loops at all indices",
    arr: [0, 1, 2],
    expected: 3,
    description: "countLoops([0, 1, 2]) should return 3 (three self-loops: 0→0, 1→1, 2→2)"
  },
  {
    name: "Two distinct separate loops",
    arr: [1, 0, 3, 2],
    expected: 2,
    description: "countLoops([1, 0, 3, 2]) should return 2 (two distinct loops: 0↔1 and 2↔3)"
  },
  {
    name: "No loop - all negative indices",
    arr: [-1, -2, -3],
    expected: 0,
    description: "countLoops([-1, -2, -3]) should return 0 (no valid indices)"
  },
  {
    name: "Single element array",
    arr: [0],
    expected: 1,
    description: "countLoops([0]) should return 1 (self-loop)"
  },
  {
    name: "Single element array with -1",
    arr: [-1],
    expected: 0,
    description: "countLoops([-1]) should return 0 (no loop)"
  },
  {
    name: "Two separate cycles",
    arr: [2, 3, 4, 5, 0, 1],
    expected: 2,
    description: "countLoops([2, 3, 4, 5, 0, 1]) should return 2 (two distinct cycles: 0→2→4→0 and 1→3→5→1)"
  },
  {
    name: "Out of bounds with self-loops",
    arr: [5, 1, 2],
    expected: 2,
    description: "countLoops([5, 1, 2]) should return 2 (two self-loops: 1→1, 2→2, index 0 goes out of bounds)"
  },
  {
    name: "Mixed valid and invalid paths",
    arr: [1, 2, -1, 4, 5, 3],
    expected: 1,
    description: "countLoops([1, 2, -1, 4, 5, 3]) should return 1 (one distinct loop in the valid part)"
  },
  {
    name: "Three distinct separate loops",
    arr: [1, 0, 3, 2, 5, 4],
    expected: 3,
    description: "countLoops([1, 0, 3, 2, 5, 4]) should return 3 (three distinct loops: 0↔1, 2↔3, 4↔5)"
  },
  {
    name: "Complex loop with tail",
    arr: [1, 2, 0, 4, 5, 6],
    expected: 1,
    description: "countLoops([1, 2, 0, 4, 5, 6]) should return 1 (one distinct loop: 0↔1↔2, tail doesn't form loop)"
  },
  {
    name: "Multiple loops with shared nodes",
    arr: [1, 2, 0, 3, 4, 2],
    expected: 3,
    description: "countLoops([1, 2, 0, 3, 4, 2]) should return 3 (three distinct loops: 0→1→2→0, 3→3, 4→4)"
  },
  {
    name: "Empty array",
    arr: [],
    expected: 0,
    description: "countLoops([]) should return 0 (no elements to form loops)"
  },
  {
    name: "All indices out of bounds",
    arr: [5, 6, 7],
    expected: 0,
    description: "countLoops([5, 6, 7]) should return 0 (all indices go out of bounds)"
  },
  {
    name: "Circular reference to same index",
    arr: [0, 1, 2, 3, 4, 5],
    expected: 6,
    description: "countLoops([0, 1, 2, 3, 4, 5]) should return 6 (six self-loops: 0→0, 1→1, 2→2, 3→3, 4→4, 5→5)"
  },
  {
    name: "Large cycle with multiple starting points",
    arr: [1, 2, 3, 4, 5, 0],
    expected: 1,
    description: "countLoops([1, 2, 3, 4, 5, 0]) should return 1 (one large cycle: 0→1→2→3→4→5→0)"
  },
  {
    name: "Nested cycles",
    arr: [1, 2, 0, 4, 5, 3],
    expected: 2,
    description: "countLoops([1, 2, 0, 4, 5, 3]) should return 2 (two cycles: 0→1→2→0 and 3→4→5→3)"
  },
  {
    name: "Single element with out of bounds",
    arr: [5],
    expected: 0,
    description: "countLoops([5]) should return 0 (index 0 goes out of bounds)"
  },
  {
    name: "Two element cycle",
    arr: [1, 0],
    expected: 1,
    description: "countLoops([1, 0]) should return 1 (one cycle: 0→1→0)"
  },
  {
    name: "Complex overlapping cycles",
    arr: [1, 2, 0, 4, 5, 3, 7, 8, 6],
    expected: 3,
    description: "countLoops([1, 2, 0, 4, 5, 3, 7, 8, 6]) should return 3 (three cycles: 0→1→2→0, 3→4→5→3, 6→7→8→6)"
  },
  {
    name: "All nodes point to last node that points to -1",
    arr: [3, 3, 3, -1],
    expected: 0,
    description: "countLoops([3, 3, 3, -1]) should return 0 (all nodes point to index 3, which points to -1, no loops formed)"
  },
  {
    name: "All nodes point to middle node that points to -1",
    arr: [1, 1, -1, 1],
    expected: 1,
    description: "countLoops([1, 1, -1, 1]) should return 1 (one self-loop: 1→1, others point to index 1 which points to -1)"
  },
  {
    name: "Most nodes point to one node that points to -1, with some self-loops",
    arr: [2, 3, 2, -1, 3],
    expected: 1,
    description: "countLoops([2, 3, 2, -1, 3]) should return 1 (one self-loop: 2→2, others point to index 3 which points to -1)"
  }
];

// Function to compare numbers
function numbersEqual(a, b) {
  return a === b;
}

// Run tests and display results
function runTests() {
  console.log("🧪 Testing Count Loops Function\n");
  console.log("=" .repeat(50));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    try {
      const result = countLoops(testCase.arr);
      const isPassed = numbersEqual(result, testCase.expected);
      
      if (isPassed) {
        console.log(`✅ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.arr)}`);
        console.log(`   Expected: ${testCase.expected}`);
        console.log(`   Output: ${result}`);
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.arr)}`);
        console.log(`   Expected: ${testCase.expected}`);
        console.log(`   Output: ${result}`);
        console.log(`   Status: FAILED\n`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test Case ${index + 1}: ${testCase.name}`);
      console.log(`   Input: ${JSON.stringify(testCase.arr)}`);
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