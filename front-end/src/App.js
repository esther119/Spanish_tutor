import "./App.css";
import AudioRecorder from "./AudioRecorderComponent";
import React, { useState } from "react";
import FileUpload from "./fileUpload";
import TextToSpeech from "./textToSpeech";
import Chat from "./chatComponent";
import PastTenseComponent from "./pastTenseComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PastTenseTable from "./pastTenseTable";

function App() {
  const [data, setData] = useState([{}]);
  const apiUrl = `${window.location.origin}/hello`;

  console.log("hello API URL:", apiUrl);

  // const handleAudioComplete = (audioBlob) => {
  // const audioUrl = URL.createObjectURL(audioBlob);
  // const audio = new Audio(audioUrl);
  //     console.log("Audio MIME type:", audio.type);
  // audio.play();
  // };
  const [storeAudioUrl, setstoreAudioUrl] = useState("");
  const handleAudioComplete = (audioBlob) => {
    // Send the audioBlob to your server for processing
    // Create a URL for the audio blob
    const audioUrl = URL.createObjectURL(audioBlob);

    // Create a new Audio object and play it
    const audio = new Audio(audioUrl);
    // audio.play();
    console.log("audio.src", audio.src);
    // Create a link and set the URL as the href attribute
    const downloadLink = document.createElement("a");
    downloadLink.href = audioUrl;
    setstoreAudioUrl(audioUrl);
    downloadLink.download = "recording"; // or the format you are using

    // Optional: Log the audio URL and MIME type
    console.log("Audio URL:", audioUrl);
    console.log("Audio MIME type:", audioBlob.type);
    const formData = new FormData();
    formData.append("file", audioBlob); // Change 'recording.webm' to the format you are using

    //   fetch("/ai_response", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((response) => response.blob())
    //     .then((data) => {
    //       console.log("Response from Google Speech-to-Text:", data);
    //     })
    //     .catch((error) => {
    //       console.error("Error processing audio", error);
    //     });
    // };
    fetch("/ai_response", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.blob()) // Assuming the response is a blob
      .then((audioResponseBlob) => {
        // Create a URL for the audio response blob
        const audioResponseUrl = URL.createObjectURL(audioResponseBlob);

        // Create a new Audio object and play it
        const audioResponse = new Audio(audioResponseUrl);
        audioResponse.play();

        // Update state to reflect the new audio URL
        setstoreAudioUrl(audioResponseUrl);

        // Optional: Log the audio URL
        console.log("AI Response Audio URL:", audioResponseUrl);
      })
      .catch((error) => {
        console.error("Error processing audio", error);
      });
  };
  const tableData = [
    { column0: "yo", column1: "quedé", column2: "comí", column3: "escribí" },
    {
      column0: "tú",
      column1: "quedaste",
      column2: "comiste",
      column3: "escribiste",
    },
    {
      column0: "él/ella",
      column1: "quedó",
      column2: "comío",
      column3: "escribió",
    },
    {
      column0: "nosotros",
      column1: "quedamos",
      column2: "comimos",
      column3: "escribimos",
    },
    {
      column0: "ustedes",
      column1: "quedaron",
      column2: "comieron",
      column3: "escribieron",
    },
    {
      column0: "ellos/ellas",
      column1: "quedaron",
      column2: "comieron",
      column3: "escribieron",
    },
    // ... more rows
  ];

  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Spanish Tutor App</h1>
        </div>

        {/* {
        !!storeAudioUrl.length && 
          <a href={storeAudioUrl} download="audio_name">
            Download sound
          </a>
        } */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <AudioRecorder onRecordingComplete={handleAudioComplete} />
                <PastTenseComponent
                  title="Past Tense Grammar"
                  description="Conjugation table for Spanish Past Tense."
                  buttonText="Start Learning"
                />
              </div>
            }
          />
          <Route
            path="/pastTenseTable"
            element={
              <div className="flex justify-center mt-8">
                <PastTenseTable data={tableData} />
              </div>
            }
          />
        </Routes>
        <FileUpload />
        <TextToSpeech />
        <Chat />
      </div>
    </Router>
  );
}

export default App;
