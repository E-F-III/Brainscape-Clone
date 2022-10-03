import React from "react";
import { useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";

import PreviewCard from "./PreviewCard";

import './PreviewCards.css'

function PreviewCards() {
    const { deckId } = useParams()

    const deck = useSelector(state => state.decks[Number(deckId)])
    const cards = useSelector(state => state.cards)
    const cardList = Object.values(cards)

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
