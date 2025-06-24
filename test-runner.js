#!/usr/bin/env node

/*
Test Runner for Programming Questions
Usage: 
  npm run test -- <folder_name> <script_name>
  node test-runner.js <folder_name> <script_name>
  node test-runner.js <week>/<question>  (legacy format)

Examples:
  npm run test -- week1 q1
  npm run test -- week2 q2
  node test-runner.js week1 q1
  node test-runner.js week2/q2 (legacy format)
*/

const fs = require('fs');
const path = require('path');

// Get the arguments from command line
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("❌ Please specify a folder and script to test.");
  console.log("\n📋 Usage:");
  console.log("  npm run test -- <folder_name> <script_name>");
  console.log("  node test-runner.js <folder_name> <script_name>");
  console.log("\n📝 Examples:");
  console.log("  npm run test -- week1 q1");
  console.log("  npm run test -- week2 q2");
  console.log("  node test-runner.js week1 q1");
  console.log("\n📁 Available folders:", getAvailableWeekFolders());
  process.exit(1);
}

let weekFolder, questionNumber;

if (args.length === 1) {
  // Legacy format: week1/q1
  const questionPath = args[0];
  if (questionPath.includes('/')) {
    const parts = questionPath.split('/');
    weekFolder = parts[0];
    questionNumber = parts[1];
  } else {
    // Single argument defaults to week2
    weekFolder = 'week2';
    questionNumber = questionPath;
  }
} else if (args.length === 2) {
  // New format: folder_name script_name
  weekFolder = args[0];
  questionNumber = args[1];
} else {
  console.log("❌ Too many arguments provided.");
  console.log("Usage: npm run test -- <folder_name> <script_name>");
  console.log("Example: npm run test -- week1 q1");
  process.exit(1);
}

// Validate week folder format
if (!weekFolder.startsWith('week') || isNaN(weekFolder.substring(4))) {
  console.log(`❌ Invalid folder format: ${weekFolder}`);
  console.log("Folders should be named like: week1, week2, week3, etc.");
  process.exit(1);
}

// Check if the week folder exists
const weekPath = path.join(__dirname, weekFolder);
if (!fs.existsSync(weekPath)) {
  console.log(`❌ Folder not found: ${weekPath}`);
  console.log("Available folders:", getAvailableWeekFolders());
  process.exit(1);
}

// Check if the test file exists
const testFilePath = path.join(weekPath, `${questionNumber}.test.js`);

if (!fs.existsSync(testFilePath)) {
  console.log(`❌ Test file not found: ${testFilePath}`);
  console.log("Available scripts in", weekFolder + ":", getAvailableQuestions(weekPath));
  process.exit(1);
}

// Check if the source file exists
const sourceFilePath = path.join(weekPath, `${questionNumber}.js`);

if (!fs.existsSync(sourceFilePath)) {
  console.log(`❌ Source file not found: ${sourceFilePath}`);
  console.log("Available scripts in", weekFolder + ":", getAvailableQuestions(weekPath));
  process.exit(1);
}

console.log(`🚀 Running tests for ${weekFolder}/${questionNumber.toUpperCase()}...\n`);

try {
  // Import and run the test
  const testModule = require(testFilePath);
  
  if (testModule.runTests) {
    testModule.runTests();
  } else {
    console.log("❌ Test file doesn't export a runTests function");
    process.exit(1);
  }
} catch (error) {
  console.log(`❌ Error running tests: ${error.message}`);
  
  // Check if it's a module not found error
  if (error.code === 'MODULE_NOT_FOUND') {
    console.log("\n💡 Make sure your source file exports the required function:");
    if (questionNumber === 'q1') {
      console.log("   module.exports = { plusOne };");
    } else if (questionNumber === 'q2') {
      console.log("   module.exports = { isSubstring };");
    } else {
      console.log("   module.exports = { yourFunctionName };");
    }
  }
  
  process.exit(1);
}

// Helper function to get available week folders
function getAvailableWeekFolders() {
  const items = fs.readdirSync(__dirname, { withFileTypes: true });
  const weekFolders = items
    .filter(item => item.isDirectory() && item.name.startsWith('week'))
    .map(item => item.name)
    .sort();
  return weekFolders.length > 0 ? weekFolders.join(', ') : 'none found';
}

// Helper function to get available questions in a week folder
function getAvailableQuestions(weekPath) {
  try {
    const items = fs.readdirSync(weekPath, { withFileTypes: true });
    const questions = items
      .filter(item => item.isFile() && item.name.endsWith('.js') && !item.name.endsWith('.test.js'))
      .map(item => item.name.replace('.js', ''))
      .sort();
    return questions.length > 0 ? questions.join(', ') : 'none found';
  } catch (error) {
    return 'error reading folder';
  }
} 