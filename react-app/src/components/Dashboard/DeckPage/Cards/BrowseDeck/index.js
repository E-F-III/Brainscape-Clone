import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './BrowseDeck.css'

function BrowseDeck() {
    const { deckId } = useParams()

    const deck = useSelector(state => state.decks[Number(deckId)])
    const cards = useSelector(state => state.cards)
    const cardList = Object.values(cards)

    const [currCard, setCurrCard] = useState(0)
    const [sideA, setSideA] = useState(true)

    const handleNext = () => {
        setCurrCard(prev => prev + 1)
        setSideA(true)
    }

    const handlePrev = () => {
        setCurrCard(prev => prev - 1)
        setSideA(true)
    }

    console.log(currCard)
    console.log(cardList)

    return (
        <>
            <div id='browse-deck-container'>
                <div id='browse-card-table'>
                    <div id='card-gutter-left'>
                        <div class='browse-card-button-container'
                            style={{ visibility: currCard > 0 ? "visible" : "hidden" }}
                            onClick={handlePrev}>
                            <ion-icon name="caret-back-outline"></ion-icon>
                        </div>
                    </div>
                    <div id='browse-card-container'>
                        <div id='browse-card'>
                            <div id='browse-card-face'>
                                <div id='browse-card-content'>
                                    <div id='browse-card-header'>
                                        <div id='browse-card-header-top'>Card {currCard + 1} of {cardList.length}</div>
                                        <div id='browse-card-header-bottom'>
                                            <div id='browse-card-indicator'>
                                                {sideA ? "Q" : "A"}
                                            </div>
                                        </div>
                                    </div>
                                    <div id='browse-card-body-container'>
                                        <div id='browse-card-body'>
                                            <div id='browse-card-body-content'>
                                                <p>{sideA ? cardList[currCard].question : cardList[currCard].answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setSideA(!sideA)} id='browse-card-button'>{sideA ? "Reveal Answer" : "Show Question"}</div>
                    </div>
                    <div id='card-gutter-right'>
                        <div class='browse-card-button-container'
                        style={{ visibility: currCard + 1 < cardList.length ? "visible" : "hidden" }}
                        onClick={handleNext}>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrowseDeck
