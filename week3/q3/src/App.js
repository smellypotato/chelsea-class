import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 3 - Question 3: React Exercise</h1>
        <p>Welcome to your React coding practice!</p>
        
        <div className="exercise-section">
          <h2>Your Exercise Goes Here</h2>
          <p>Edit this file to complete your React exercise</p>
        </div>

        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            <li>1. Write a timer that show the time passed since the page is loaded.</li>
            <li>2. The timer should display in format HH:MM:SS</li>
            <li>3. Also display the page loaded Date and time using Date().</li>
            <li>4. Let the page idle for a couple hours. Check if the time passed is correct (compare expected passed time to page loaded time + timer)</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;