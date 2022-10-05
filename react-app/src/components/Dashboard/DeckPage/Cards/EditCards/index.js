import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import CardForm from './CardForm'

import './EditCards.css'

function EditCards({ deckId }) {
    const deck = useSelector(state => state.decks[Number(deckId)])
    const cards = useSelector(state => state.cards)
    const cardList = Object.values(cards)

    const [showCreateCard, setShowCreateCard] = useState(false)

    let createCard
    if (showCreateCard) {
        createCard = <CardForm deckId={deckId} edit={false} setShowCreateCard={setShowCreateCard} />
    } else {
        createCard = (
            <div id='create-card-row'>
                <div id='create-card-header'></div>
                <div id='create-card-body-container'>
                    <div onClick={() => setShowCreateCard(true)} id='create-card-body'>
                        <div className="general-edit-buttons">
                            <ion-icon size="large" style={{color: 'orange'}} name="add"></ion-icon>
                        </div>
                        <div id='create-card-prompt'>
                            Create New Card
                        </div>
                    </div>
                </div>
                <div id='create-card-footer'></div>
            </div>
        )
    }

    return (
        <>
            <div id='edit-card-container'>
                <div id='deck-editor'>
                    {/* <div id='deck-editor-side-bar'>
                        <div id='deck-editor-side-bar-header'></div>
                        <div id='deck-editor-side-bar-card-list'></div>
                    </div> */}
                    <div id='deck-editor-main'>
                        <div id='deck-editor-cards'>
                            {/* map edit cards here  */}
                            {cardList.map((card, idx) => (
                                <CardForm key={card.id} card={card} idx={idx} edit={true} />
                            ))}
                            {/* create card form */}
                            {createCard}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCards;
