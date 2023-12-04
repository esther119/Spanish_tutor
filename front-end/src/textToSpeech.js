import React, { useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const triggerTextToSpeech = async () => {
    try {
      const response = await fetch("/textToSpeech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio data.");
      }

      // Read the response as blob (binary data)
      const audioBlob = await response.blob();

      // Create an Object URL from the blob
      const audioUrl = URL.createObjectURL(audioBlob);

      // Create a new Audio element programmatically
      const audio = new Audio();

      // Set the audio source to the URL
      audio.src = audioUrl;

      // Play the audio if the element was successfully created
      if (audio) {
        audio.play();
      }
    } catch (error) {
      console.error("Error playing text to speech:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <button onClick={triggerTextToSpeech}>Convert to Speech</button>
    </div>
  );
};

export default TextToSpeech;


// import React, { useState } from "react";

// const TextToSpeech = () => {
//   const [text, setText] = useState("");

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   const triggerTextToSpeech = async () => {
//     try {
//       const response = await fetch("/textToSpeech", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: text }),
//       });

//       const data = await response.json();
//       console.log("Response from text to speech:", data);
//       playAudio(data.audioContent);
//     } catch (error) {
//       console.error("Error playing text to speech:", error);
//     }
//   };

//   const playAudio = (base64Audio) => {
//     const audioBlob = new Blob(
//       [Uint8Array.from(atob(base64Audio), (c) => c.charCodeAt(0))],
//       { type: "audio/mp3" }
//     );
//     const audioUrl = URL.createObjectURL(audioBlob);
//     const audio = new Audio(audioUrl);
//     audio.play();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Enter text"
//       />
//       <button onClick={triggerTextToSpeech}>Convert to Speech</button>
//     </div>
//   );
// };

// export default TextToSpeech;
