import React, { useState } from 'react';
import './App.css';
import { useDirectionalInput } from './hooks/useDirectionalInput';

function App() {
  const [mode, setMode] = useState('single');
  const { currentDirection } = useDirectionalInput(mode);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 4 - Question 2: Directional Input Detection</h1>
        <p>Welcome to your React coding practice!</p>
        
        <div className="exercise-section">
          <div className="directional-input">
            <h2>Directional Input Detection</h2>
            
            <div className="controls">
              <button 
                onClick={() => setMode('single')}
                className={mode === 'single' ? 'active' : ''}
              >
                Single Key Mode
              </button>
              <button 
                onClick={() => setMode('multiple')}
                className={mode === 'multiple' ? 'active' : ''}
              >
                Multiple Keys Mode
              </button>
            </div>
            
            <div className="display">
              <p>Current Mode: {mode}</p>
              <p>Current Direction: {currentDirection}</p>
            </div>
            
            <div className="instructions">
              <p>Use arrow keys or WASD to test the input detection</p>
            </div>
          </div>
        </div>

        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            <li>Complete the useDirectionalInput hook in the hooks/useDirectionalInput.js file.</li>
            <li>The hook should detect up/down/left/right input using arrow keys or WASD.</li>
            <li>As long as a key is held, it should be recognized as active input.</li>
            <li>If both key for the same direction are pressed, the last key pressed will overwrite the first key pressed.</li>
            <li>There should be two modes: single key and multiple keys.</li>
            <li><strong>Single Key Mode:</strong> Only the latest key should be used as input. Show the input as NESW (North East South West).</li>
            <li><strong>Multiple Keys Mode:</strong> Up/down and left/right are conflict input pairs. Only the latest unconflicted key should be used. Show the input as NESW (North, North East, East, South East...).</li>
            <li>Example for Single Key: hold up → hold left → hold right → hold down → release down, display: N → W → E → S → E</li>
            <li>Example for Multiple Keys: hold up → hold left → hold right → hold down → release down, display: N → NW → NE → SE → NE</li>
            <li>The hook should return an object with currentDirection.</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;