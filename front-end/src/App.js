import "./App.css";
import AudioRecorder from "./AudioRecorderComponent";
import React, { useState, useEffect } from "react";
import FileUpload from "./fileUpload";
import TextToSpeech from "./textToSpeech";

function App() {
  const [data, setData] = useState([{}]);
  const apiUrl = `${window.location.origin}/hello`;

  console.log("hello API URL:", apiUrl);

  useEffect(() => {
    fetch("/hello", {
      method: "POST",
      body: 'hi',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hello api test:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  //   const handleAudioComplete = (audioBlob) => {
  //     const audioUrl = URL.createObjectURL(audioBlob);
  //     const audio = new Audio(audioUrl);
  //     console.log("Audio MIME type:", audio.type);
  //     audio.play();
  // };
  const handleAudioComplete = (audioBlob) => {
    // Send the audioBlob to your server for processing
    // Create a URL for the audio blob
    const audioUrl = URL.createObjectURL(audioBlob);

    // Create a new Audio object and play it
    const audio = new Audio(audioUrl);
    audio.play();
    // Create a link and set the URL as the href attribute
    // const downloadLink = document.createElement("a");
    // downloadLink.href = audioUrl;
    // downloadLink.download = "recording"; // or the format you are using

    //  // Append the link to the body (can be hidden), simulate click and remove it
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);

    // Optional: Log the audio URL and MIME type
    console.log("Audio URL:", audioUrl);
    console.log("Audio MIME type:", audioBlob.type);
    const formData = new FormData();
    formData.append("file", audioBlob); // Change 'recording.webm' to the format you are using

    fetch("/transcribe", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from Google Speech-to-Text:", data);
      })
      .catch((error) => {
        console.error("Error processing audio", error);
      });
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
        <TextToSpeech />

      </header>
    </div>
  );
}

export default App;
