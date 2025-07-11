#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function createReactExercise(week, question) {
  const exercisePath = path.join(__dirname, `week${week}/q${question}`);
  
  // Create directory structure
  const dirs = [
    exercisePath,
    path.join(exercisePath, 'public'),
    path.join(exercisePath, 'src'),
    path.join(exercisePath, 'src/components')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Create package.json
  const packageJson = {
    "name": `week${week}-q${question}-react-exercise`,
    "version": "1.0.0",
    "description": `React exercise for Week ${week} Question ${question}`,
    "main": "index.js",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  };

  fs.writeFileSync(
    path.join(exercisePath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Create public/index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Week ${week} Question ${question} - React Exercise"
    />
    <title>Week ${week} Q${question} - React Exercise</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

  fs.writeFileSync(path.join(exercisePath, 'public/index.html'), indexHtml);

  // Create src/index.js
  const indexJs = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  fs.writeFileSync(path.join(exercisePath, 'src/index.js'), indexJs);

  // Create src/index.css
  const indexCss = `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;

  fs.writeFileSync(path.join(exercisePath, 'src/index.css'), indexCss);

  // Create src/App.js
  const appJs = `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Week ${week} - Question ${question}: React Exercise</h1>
        <p>Welcome to your React coding practice!</p>
        
        <div className="exercise-section">
          <h2>Your Exercise Goes Here</h2>
          <p>Edit this file to complete your React exercise</p>
        </div>

        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            <li>Edit this file to complete your React exercise</li>
            <li>Add new components in the components/ directory</li>
            <li>Style your components using CSS</li>
            <li>Test your implementation</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;`;

  fs.writeFileSync(path.join(exercisePath, 'src/App.js'), appJs);

  // Create src/App.css
  const appCss = `.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 1vmin);
}

.exercise-section {
  background-color: #3a3f4b;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  max-width: 500px;
}

.instructions {
  background-color: #3a3f4b;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  max-width: 600px;
  text-align: left;
}

.instructions ol {
  margin: 10px 0;
  padding-left: 20px;
}

.instructions li {
  margin: 8px 0;
}`;

  fs.writeFileSync(path.join(exercisePath, 'src/App.css'), appCss);

  // Create README.md
  const readme = `# Week ${week} - Question ${question}: React Exercise

## Setup Instructions

1. **Navigate to this directory:**
   \`\`\`bash
   cd week${week}/q${question}
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm start
   \`\`\`

4. **Open your browser** and go to \`http://localhost:3000\`

## Exercise Description

[Add your React exercise description here]

## File Structure

\`\`\`
week${week}/q${question}/
├── package.json          # Dependencies and scripts
├── public/
│   ├── index.html        # HTML template
│   └── favicon.ico       # Favicon
├── src/
│   ├── index.js          # Entry point
│   ├── App.js            # Main App component
│   ├── App.css           # App styles
│   └── components/       # Your React components
└── README.md             # This file
\`\`\`

## Development

- Edit \`src/App.js\` to start building your React application
- Add new components in the \`src/components/\` directory
- Styles can be added in \`src/App.css\` or create new CSS files

## Available Scripts

- \`npm start\` - Runs the app in development mode
- \`npm test\` - Launches the test runner
- \`npm run build\` - Builds the app for production
- \`npm run eject\` - Ejects from Create React App (irreversible)`;

  fs.writeFileSync(path.join(exercisePath, 'README.md'), readme);

  console.log(`✅ Created React exercise at: ${exercisePath}`);
  console.log(`📁 To get started:`);
  console.log(`   cd ${exercisePath}`);
  console.log(`   npm install`);
  console.log(`   npm start`);
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('Usage: node create-react-exercise.js <week> <question>');
  console.log('Example: node create-react-exercise.js 3 4');
  process.exit(1);
}

const [week, question] = args;
createReactExercise(week, question); 