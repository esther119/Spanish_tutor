import "./App.css";
import AudioRecorder from "./AudioRecorderComponent";
import React, { useState } from "react";
import FileUpload from "./fileUpload";
import TextToSpeech from "./textToSpeech";
import Chat from "./chatComponent";
import PastTenseComponent from "./pastTenseComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PastTenseTable from "./pastTenseTable";
import FlashCardPage from "./flashCardPage";

const sampleFlashCards = [
  {
      id: 1,
      front: <img src='/images/manzana.png' alt="Description" className="object-contain"/>,
      back: "manzana",
      flipped: false
  },
  {
      id: 2,
      front: <img src='/images/fracasar.png' alt="Description" className="object-fit"/>,
      back: "fracasar",
      flipped: false
  },
  {
      id: 3,
      front: <img src='/images/obtener.png' alt="Description" className="object-fit"/>,
      back: "obtener",
      flipped: false
  },
  {
    id: 3,
    front: <img src='/images/acabado.png' alt="Description" className="object-fit"/>,
    back: "acabar",
    flipped: false
},
  {
      id: 4,
      front: <img src='/images/alaridos.png' alt="Description" className="object-fit"/>,
      back: "alaridos",
      flipped: false
}
  ,
  {
      id: 5,
      front: <img src='/images/bromas.png' alt="Description" className="object-fit"/>,
      back: "bromas",
      flipped: false
  },
  {
      id: 6,
      front: <img src='/images/caer.png' alt="Description" className="object-fit"/>,
      back: "caer",
      flipped: false
  },
  {
      id: 7,
      front: <img src='/images/castigar.png' alt="Description" className="object-fit"/>,
      back: "castigar",
      flipped: false
  },
  {
      id: 8,
      front: <img src='/images/desastre.png' alt="Description" className="object-fit"/>,
      back: "desastre",
      flipped: false
  },
  {
      id: 9,
      front: <img src='/images/doler.png' alt="Description" className="object-fit"/>,
      back: "doler",
      flipped: false
  },
  {
      id: 10,
      front: <img src='/images/enojado.png' alt="Description" className="object-fit"/>,
      back: "enojado",
      flipped: false
  },
  {
      id: 11,
      front: <img src='/images/enseguida.png' alt="Description" className="object-fit"/>,
      back: "enseguida",
      flipped: false
  },
  {
      id: 12,
      front: <img src='/images/grito.png' alt="Description" className="object-fit"/>,
      back: "gritó",
      flipped: false
  },
  {
      id: 13,
      front: <img src='/images/seca.png' alt="Description" className="object-fit"/>,
      back: "la boca seca",
      flipped: false
  },
  {
      id: 14,
      front: <img src='/images/lechuza.png' alt="Description" className="object-fit"/>,
      back: "lechuza",
      flipped: false
  },
  {
      id: 15,
      front: <img src='/images/matar.png' alt="Description" className="object-fit"/>,
      back: "matar",
      flipped: false
  },
  {
      id: 16,
      front: <img src='/images/mentiras.png' alt="Description" className="object-fit"/>,
      back: "mentiras",
      flipped: false
  },
  {
      id: 17,
      front: <img src='/images/pajaros.png' alt="Description" className="object-fit"/>,
      back: "pájaros",
      flipped: false
  },
  {
      id: 18,
      front: <img src='/images/poer.png' alt="Description" className="object-fit"/>,
      back: "poer",
      flipped: false
  },
  {
      id: 19,
      front: <img src='/images/prometio.png' alt="Description" className="object-fit"/>,
      back: "prometer",
      flipped: false
  },
  {
      id: 20,
      front: <img src='/images/ruborizando.png' alt="Description" className="object-fit"/>,
      back: "rubor",
      flipped: false
  },
  {
      id: 21,
      front: <img src='/images/ruego.png' alt="Description" className="object-fit"/>,
      back: "rogar",
      flipped: false
  },
  {
      id: 22,
      front: <img src='/images/suelo.png' alt="Description" className="object-fit"/>,
      back: "suelo",
      flipped: false
  },
  {
      id: 23,
      front: <img src='/images/temblar.png' alt="Description" className="object-fit"/>,
      back: "temblar",
      flipped: false
  },
  {
      id: 24,
      front: <img src='/images/trapero.png' alt="Description" className="object-fit"/>,
      back: "trapero",
      flipped: false
  },
  {
      id: 25,
      front: <img src='/images/triunfo.png' alt="Description" className="object-fit"/>,
      back: "triunfo",
      flipped: false
  },
  {
      id: 26,
      front: <img src='/images/acarrear.png' alt="Description" className="object-fit"/>,
      back: "acarrear",
      flipped: false
  },
  {
      id: 27,
      front: <img src='/images/aguejero.png' alt="Description" className="object-fit"/>,
      back: "aguejero",
      flipped: false
  },
  {
      id: 28,
      front: <img src='/images/blandir.png' alt="Description" className="object-fit"/>,
      back: "blandir",
      flipped: false
  },
  {
      id: 29,
      front: <img src='/images/buldog.png' alt="Description" className="object-fit"/>,
      back: "buldog",
      flipped: false
  },
  {
      id: 30,
      front: <img src='/images/cantidad.png' alt="Description" className="object-fit"/>,
      back: "cantidad",
      flipped: false
  }, 
  {
    id: 31,
    front: <img src='/images/coger.png' alt="Description" className="object-fit"/>,
    back: "coger",
    flipped: false
  }
  ,
  {
    id: 32,
    front: <img src='/images/duro.png' alt="Description" className="object-fit"/>,
    back: "duro",
    flipped: false
  }
  ,
  {
    id: 33,
    front: <img src='/images/encerrar.png' alt="Description" className="object-fit"/>,
    back: "encerrar",
    flipped: false
  }
  ,
  {
    id: 34,
    front: <img src='/images/menoresdeedad.png' alt="Description" className="object-fit"/>,
    back: "menores de edad",
    flipped: false
  }
  ,
  {
    id: 35,
    front: <img src='/images/planeador.png' alt="Description" className="object-fit"/>,
    back: "planeador",
    flipped: false
  }
  ,
  {
    id: 36,
    front: <img src='/images/reirse.png' alt="Description" className="object-fit"/>,
    back: "reírse",
    flipped: false
  }
  ,
  {
    id: 37,
    front: <img src='/images/reja.png' alt="Description" className="object-fit"/>,
    back: "reja",
    flipped: false
  }
  ,
  {
    id: 38,
    front: <img src='/images/riesgo.png' alt="Description" className="object-fit"/>,
    back: "reisgo",
    flipped: false
  }
  ,
  {
    id: 39,
    front: <img src='/images/vista.png' alt="Description" className="object-fit"/>,
    back: "vista",
    flipped: false
  }




];


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
  const [flashCards, setFlashCards] = useState(sampleFlashCards);
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
          <h1 className="text-4xl font-bold">Spanish Tutor</h1>
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
          <Route path="/flashcard" element={<FlashCardPage FlashCardsList={sampleFlashCards}/>}/>
        </Routes>
        {/* <FileUpload />
        <TextToSpeech />
        <Chat /> */}
      </div>
    </Router>
  );
}

export default App;
