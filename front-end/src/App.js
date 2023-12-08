import "./App.css";
import AudioRecorder from "./AudioRecorderComponent";
import React, { useState, useEffect } from "react";
import FileUpload from "./fileUpload";
import TextToSpeech from "./textToSpeech";
import Chat from "./chatComponent";

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
  const [storeAudioUrl, setstoreAudioUrl] = useState("");
  const handleAudioComplete = (audioBlob) => {

    // Send the audioBlob to your server for processing
    // Create a URL for the audio blob
    const audioUrl = URL.createObjectURL(audioBlob);

    // Create a new Audio object and play it
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("audio.src", audio.src);
    // Create a link and set the URL as the href attribute
    const downloadLink = document.createElement("a");
    downloadLink.href = audioUrl;
    setstoreAudioUrl(audioUrl)
    downloadLink.download = "recording"; // or the format you are using

    // Optional: Log the audio URL and MIME type
    console.log("Audio URL:", audioUrl);
    console.log("Audio MIME type:", audioBlob.type);
    const formData = new FormData();
    formData.append("file", audioBlob); // Change 'recording.webm' to the format you are using


    fetch("/ai_response", {
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
        {
        !!storeAudioUrl.length && 
          <a href={storeAudioUrl} download="audio_name">
            Download sound
          </a>
        }
        <AudioRecorder onRecordingComplete={handleAudioComplete} />
        <FileUpload />
        <TextToSpeech />
        <Chat />

      </header>
    </div>
  );
}

export default App;
