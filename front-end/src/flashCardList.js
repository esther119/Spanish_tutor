import React from "react";
import FlashCard from "./flashCard";

export default function FlashCardList({flashCards}) {

    return (
        <div className="flex flex-row card-grid">
        {flashCards.map(flashCard => (
            <FlashCard flashCard={flashCard} key={flashCard.id}/>
            ))}
        </div>
    );
    }

    
