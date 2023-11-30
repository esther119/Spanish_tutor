import './App.css';
import AudioRecorderComponent from './AudioRecorderComponent';
import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch('/hello')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AudioRecorderComponent />
      </header>
    </div>
  );
}

export default App;
