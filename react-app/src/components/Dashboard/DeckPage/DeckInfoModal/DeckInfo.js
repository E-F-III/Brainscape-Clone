import React from "react";
import { useSelector } from "react-redux";

import './DeckInfoModal.css'

const DeckInfo = ({ deckId, setShowModal }) => {
    const deck = useSelector(state => state.decks[Number(deckId)])

    return (
        <>
            <div id="close-deck-info-button-container"></div>
            <div id="deck-modal-content">
                <div id="deck-modal-title">{deck.title}</div>
                <div id="deck-modal-description">{deck.description.length > 0 ? deck.description : "No description entered for this deck"}</div>
                <div onClick={()=> setShowModal(false)} className="pill-button modal-button">Ok</div>
            </div>
        </>

    )
}

export default DeckInfo
