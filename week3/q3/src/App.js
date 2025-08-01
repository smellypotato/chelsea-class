import React, {useState, useEffect} from 'react';
import './App.css';
function App() {
  const [datetime, setDatetime] = useState("");
  const [timerInSecond, setTimerInSecond] = useState(0);
  const [timer, setTimer] = useState("00:00:00");

  function formateTime(seconds) {
    const secs = String(seconds % 60).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2,"0");
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }

  useEffect(()=> {
    setDatetime(new Date());
    
    let secondsPassed = 0;
    setInterval(()=> {
      secondsPassed++;
      setTimerInSecond(secondsPassed);
      setTimer(formateTime(secondsPassed));
    }, 1000);
  },[])
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
            <li>Write a timer that show the time passed since the page is loaded.</li>
            <div className="answer">{timerInSecond}</div>
            <li>The timer should display in format HH:MM:SS</li>
            <div className="answer">{timer}</div>
            <li>Also display the page loaded Date and time using Date().</li>
            <div className="answer">{datetime.toLocaleString()}</div>
            <li>Let the page idle for a couple hours. Check if the time passed is correct (compare expected passed time to page loaded time + timer)</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;