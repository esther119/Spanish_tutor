import React from "react";
import FlashCard from "./flashCard";

export default function FlashCardList({ flashCards }) {
    // Split the flashCards into groups of 4
    const groupedFlashCards = [];
    for (let i = 0; i < flashCards.length; i += 4) {
      groupedFlashCards.push(flashCards.slice(i, i + 4));
    }
  
    return (
      <div>
        {groupedFlashCards.map((group, index) => (
          <div className="flex flex-row card-grid" key={index}>
            {group.map((flashCard) => (
              <FlashCard flashCard={flashCard} key={flashCard.id} />
            ))}
          </div>
        ))}
      </div>
    );
  }
  