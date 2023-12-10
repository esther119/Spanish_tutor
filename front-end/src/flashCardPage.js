import React, { useState } from "react";
import FlashCardList from "./flashCardList";

export default function FlashCardPage({FlashCardsList}) {
    const [flashCards, setFlashCards] = useState(FlashCardsList);
    return (
        <FlashCardList flashCards={flashCards}/>
    );
}