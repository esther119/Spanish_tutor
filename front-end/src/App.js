import './App.css';
import AudioRecorder from './AudioRecorderComponent';
import React, { useState, useEffect } from 'react';
import FileUpload from './fileUpload';

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
  }, []);
  const handleAudioComplete = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
};

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AudioRecorder onRecordingComplete={handleAudioComplete} />
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
