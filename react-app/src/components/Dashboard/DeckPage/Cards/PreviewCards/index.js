import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PreviewCard from "./PreviewCard";

import './PreviewCards.css'

function PreviewCards({ classId, deckId }) {
    const history = useHistory()

    const cards = useSelector(state => state.cards)
    const cardList = Object.values(cards)

    if (!cardList.length) {
        return (
            <div className="empty-list-warning">
                <h1>Preview Cards not Available</h1>
                <h2>This Deck has no cards yet. Click Add Cards below to get started</h2>
                <button className="pill-button modal-button" onClick={() => history.push(`/dashboard/${classId}/decks/${deckId}/cards/edit`)}> ADD CARDS </button>
            </div>
        )
    }

    return (
        <>
            <div id="preview-cards-container">
                <div id="preview-cards-table">
                    <div id="preview-cards-list">
                        {cardList.map((card, idx) => (
                            <PreviewCard key={card.id} card={card} idx={idx} />
                        ))}
                    </div>
                </div>
            </div>

        </>

    )
}

export default PreviewCards
