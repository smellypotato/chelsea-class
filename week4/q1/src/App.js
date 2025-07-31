import React from 'react';
import './App.css';
import { Marquee } from './components/Marquee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 4 - Question 1: Marquee</h1>
        <p>Welcome to your React coding practice!</p>
        
        <div className="exercise-section">
          <Marquee speed={100} contents={["Morbi tincidunt tincidunt odio, ac tempor elit. Suspendisse condimentum turpis.", "Nam bibendum, odio sed tincidunt interdum, eros est semper lorem, vel tempor nunc neque vel.", "Aliquam nisi mi, mattis sit amet fermentum a."]} />
        </div>

        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            <li>Complete the Marquee component in the components/Marquee.jsx file.</li>
            <li>The Marquee should display the contents in a marquee effect, scrolling from right to left, infinitely. The gap between the contents should be <strong>2rem</strong>.</li>
            <li>You can apply any styling you want to the Marquee component.</li>
            <li>The Marquee should loop flawlessly in any component, you can adjust the width of exercise-section in App.css</li>

          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;