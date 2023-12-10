import React, { useState } from "react";

export default function FlashCard({ flashCard }) {
  console.log("flashCards", flashCard);
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
        {flip ? flashCard.front : flashCard.back}
      {/* <div className="front">{flashCard.front}</div>
      <div className="back">{flashCard.back}</div> */}
    </div>
  );
}
