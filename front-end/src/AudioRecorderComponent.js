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
    <div className="p-6">
      <div className="flex justify-center mb-8">
        <button
          className={`px-40 py-2 font-semibold rounded-lg shadow-md transition-colors ${
            isRecording ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
          onClick={isRecording ? stopRecording : startRecording}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
      </div>
    </div>
  );
}

export default AudioRecorder;
