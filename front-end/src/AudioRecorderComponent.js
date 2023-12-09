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

//     <div>
//       <div>
//         {isRecording ? (
//           <button
//             class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-[1.5px] border-gray-800 rounded shadow"
//             onClick={stopRecording}
//           >
//             Stop Recording
//           </button>
//         ) : (
//           <button
//             class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-[1.5px] border-gray-800 rounded shadow"
//             onClick={startRecording}
//           >
//             Start Recording
//           </button>
//         )}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
//         <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
//           <p className="font-bold text-lg">Past Tense Grammar</p>
//           <p>Conjugation table for Spanish Past Tense.</p>
//           <button
//             className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             //   onClick={() => startLearning('Grammar')}
//           >
//             Start Learning
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
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
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-3">Past Tense Grammar</h3>
          <p className="mb-4">Conjugation table for Spanish Past Tense.</p>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            // onClick={() => startLearning('Grammar')}
          >
            Start Learning
          </button>
        </div>
        {/* Add more grid items here if needed */}
      </div>
    </div>
    </div>
  );
}

export default AudioRecorder;
