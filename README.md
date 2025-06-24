# Potato Programming

Welcome to your programming journey! This repository is designed to track your progress and learning in programming through practical exercises and collaborative development practices.

## Workflow

### Pull Request Process
We follow a strict pull request workflow to help you become familiar with industry-standard collaborative programming practices. This approach will help you understand:
- Branch management
- Code review processes
- Version control best practices
- Collaborative development workflows

### Exercise Process
1. After each lesson, coding questions will be added to the main branch
2. You'll be notified when new questions are available
3. Create a new branch from the specific commit containing the question
4. Work on your solution in your branch
5. When ready, create a pull request to the main branch
6. Your code will be reviewed and approved if it meets the requirements
7. Feel free to add comments to your PR if you have questions about your implementation
8. Estimate the time to complete the questions when you merge
9. Don't worry if you can't complete all questions - uncompleted questions will be moved to the next week

## Testing Your Solutions

### Automated Testing System
This repository includes an automated testing system that provides immediate feedback on your solutions, you can take a look at the test files to learn how it works.

### Running Tests
To test your solutions, use the following command format:
```bash
npm run test -- <week_folder> <question_number>
```

**Examples:**
```bash
npm run test -- week1 q1
```

### Test Output Format
The testing system provides detailed feedback in the following format:
```
🧪 Testing Your Function

==================================================
✅ Test Case 1: Simple case
   Input: [1,2,3]
   Expected: [1,2,4]
   Output: [1,2,4]
   Status: PASSED

❌ Test Case 2: Edge case
   Input: [9,9,9]
   Expected: [1,0,0,0]
   Output: [9,9,9]
   Status: FAILED

==================================================
📊 Test Results Summary:
   Total Test Cases: 8
   ✅ Passed: 7
   ❌ Failed: 1
   📈 Success Rate: 87.5%

⚠️  1 test case(s) failed. Please review your implementation.
```

### Understanding Test Results
- **✅ PASSED**: Your solution correctly handles this test case
- **❌ FAILED**: Your solution needs improvement for this test case
- **Success Rate**: Percentage of test cases your solution passes
- **Input/Expected/Output**: Shows exactly what was tested and what your function returned

### Testing Best Practices
1. **Run tests frequently** - Test your code after each significant change
2. **Read the output carefully** - The test results show exactly what went wrong
3. **Start with simple cases** - Focus on passing basic test cases first
4. **Handle edge cases** - Pay attention to boundary conditions and special inputs
5. **Don't get discouraged** - Failing tests help you identify and fix issues

## Getting Started

### Running JavaScript Files
Most initial tasks will require you to write JavaScript files. To run your scripts:
```bash
node ./script_name.js arg1 arg2...
```

## Learning Resources
While working on exercises:
- Try to solve problems independently first
- Use the testing system to validate your solutions
- Feel free to search for solutions on Stack Overflow or other programming resources
- Ask for assistant through messages. Be concise about the problem you are facing
- If the question requirements are not clear, don't hesitate to ask for clarification
- Avoid using AI assistants to maintain the learning experience

Good luck with your programming journey! Happy coding! 🚀 