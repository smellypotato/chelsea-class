const { rotateArray } = require('./q5');

// Test cases for rotateArray function
const testCases = [
  {
    name: "Target in middle",
    input: [['a','b','c','d'], 'c'],
    expectedResult: true,
    expectedArray: ['c','d','a','b'],
    expectedLogs: [
      '["b","c","d","a"]',
      '["c","d","a","b"]'
    ],
    description: "Should rotate so 'c' is first"
  },
  {
    name: "Target at start",
    input: [['x','y','z'], 'x'],
    expectedResult: true,
    expectedArray: ['x','y','z'],
    expectedLogs: [],
    description: "No rotation needed if target is already first"
  },
  {
    name: "Target at end",
    input: [['m','n','o'], 'o'],
    expectedResult: true,
    expectedArray: ['o','m','n'],
    expectedLogs: [
      '["n","o","m"]',
      '["o","m","n"]'
    ],
    description: "Should rotate so 'o' is first"
  },
  {
    name: "Target not found",
    input: [['a','b','c'], 'q'],
    expectedResult: false,
    expectedArray: ['a','b','c'],
    expectedLogs: [],
    description: "Should return false and not modify array if target not found"
  },
  {
    name: "Single element, is target",
    input: [['z'], 'z'],
    expectedResult: true,
    expectedArray: ['z'],
    expectedLogs: [],
    description: "Single element array, target is present"
  },
  {
    name: "Single element, not target",
    input: [['z'], 'a'],
    expectedResult: false,
    expectedArray: ['z'],
    expectedLogs: [],
    description: "Single element array, target is not present"
  },
  {
    name: "Empty array",
    input: [[], 'a'],
    expectedResult: false,
    expectedArray: [],
    expectedLogs: [],
    description: "Empty array should return false"
  },
  {
    name: "Target is a symbol",
    input: [['@','#','$','%'], '$'],
    expectedResult: true,
    expectedArray: ['$', '%', '@', '#'],
    expectedLogs: [
      '["#","$","%","@"]',
      '["$","%","@","#"]'
    ],
    description: "Should rotate so '$' is first"
  },
  {
    name: "Target is a number (as string)",
    input: [['1','2','3','4'], '3'],
    expectedResult: true,
    expectedArray: ['3','4','1','2'],
    expectedLogs: [
      '["2","3","4","1"]',
      '["3","4","1","2"]'
    ],
    description: "Should rotate so '3' is first"
  },
  {
    name: "Target is a whitespace",
    input: [['a',' ','b','c'], ' '],
    expectedResult: true,
    expectedArray: [' ', 'b', 'c', 'a'],
    expectedLogs: [
      '[" ","b","c","a"]'
    ],
    description: "Should rotate so whitespace is first"
  },
  {
    name: "Mixed types, target is symbol",
    input: [['a','1','!','b'], '!'],
    expectedResult: true,
    expectedArray: ['!', 'b', 'a', '1'],
    expectedLogs: [
      '["1","!","b","a"]',
      '["!","b","a","1"]'
    ],
    description: "Should rotate so '!' is first"
  }
];

function arraysEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => v === b[i]);
}

function logsEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => v === b[i]);
}

function runTests() {
  console.log("\uD83E\uDDEA Testing Rotate Array Function\n");
  console.log("=".repeat(50));
  let passed = 0;
  let failed = 0;
  testCases.forEach((testCase, idx) => {
    try {
      const arr = [...testCase.input[0]];
      const target = testCase.input[1];
      // Capture console.log output during test
      const logs = [];
      const originalLog = console.log;
      console.log = (msg) => { logs.push(msg); };
      const result = rotateArray(arr, target);
      console.log = originalLog;
      const pass = result === testCase.expectedResult && arraysEqual(arr, testCase.expectedArray) && logsEqual(logs, testCase.expectedLogs);
      if (pass) {
        console.log(`✅ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.input[0])}, target: '${target}'`);
        console.log(`   Output: ${result}`);
        console.log(`   Modified array: ${JSON.stringify(arr)}`);
        if (testCase.expectedLogs.length > 0) {
          console.log(`   Logs: ${logs}`);
        }
        console.log(`   Status: PASSED\n`);
        passed++;
      } else {
        console.log(`❌ Test Case ${idx + 1}: ${testCase.name}`);
        console.log(`   Input: ${JSON.stringify(testCase.input[0])}, target: '${target}'`);
        console.log(`   Output: ${result}`);
        console.log(`   Modified array: ${JSON.stringify(arr)}`);
        console.log(`   Expected result: ${testCase.expectedResult}`);
        console.log(`   Expected array: ${JSON.stringify(testCase.expectedArray)}`);
        if (testCase.expectedLogs.length > 0) {
          console.log(`   Logs: ${logs}`);
          console.log(`   Expected logs: ${JSON.stringify(testCase.expectedLogs)}`);
        }
        console.log(`   Status: FAILED\n`);
        failed++;
      }
    } catch (error) {
      console.log = originalLog;
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