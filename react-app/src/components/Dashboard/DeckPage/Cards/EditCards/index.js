import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import CardForm from './CardForm'

import './EditCards.css'

function EditCards() {
    const { deckId } = useParams()

    const deck = useSelector(state => state.decks[Number(deckId)])
    const cards = useSelector(state => state.cards)
    const cardList = Object.values(cards)

    return (
        <>
            <div id='edit-card-container'>
                <div id='deck-editor'>
                    <div id='deck-editor-side-bar'>
                        <div id='deck-editor-side-bar-header'></div>
                        <div id='deck-editor-side-bar-card-list'></div>
                    </div>
                    <div id='deck-editor-main'>
                        <div id='deck-editor-cards'>
                            {/* map edit cards here  */}
                            {cardList.map((card, idx) => (
                                <CardForm key={card.id} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCards;
