import React from "react";
import { useSelector } from "react-redux";

const DeckInfo = ({ deckId }) => {
    const deck = useSelector(state => state.decks[Number(deckId)])

    return (
        <div>
            <h1>{deck.title}</h1>
            <p>{deck.description}</p>
        </div>
    )
}

export default DeckInfo
