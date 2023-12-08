import React, { useState } from "react";

function AudioRecorder({ onRecordingComplete }) {
  const [isRecording, setIsRecording] = useState(false); // check if recording
  const [mediaRecorder, setMediaRecorder] = useState(null); // hold the elements we record

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true }) // Requests access to the user's audio input devices (microphone).
      .then((stream) => {
        const newMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(newMediaRecorder);

        newMediaRecorder.start();
        setIsRecording(true);

        let audioChunks = [];
        newMediaRecorder.ondataavailable = (event) => {
          // This event is triggered when the MediaRecorder has an audio blob chunk available
          audioChunks.push(event.data);
        };

        newMediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/flac" });
          onRecordingComplete(audioBlob);
          audioChunks = [];
          stream.getTracks().forEach((track) => track.stop()); // Stop the microphone access
        };
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      {isRecording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
    </div>
  );
}

export default AudioRecorder;
